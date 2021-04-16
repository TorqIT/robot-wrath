import React, { useEffect, useMemo, useState } from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots as submittedRobots } from "./robots";
import { RobotCombatant, RobotEntrant, TurnEvent } from "./interfaces";
import {
  advance,
  generateCombatants,
  getStatus,
  getVictor,
  simulateGame,
} from "./gameLogic";
import { EventList } from "./EventList";
import styles from "./robotWrath.module.css";
import { Victor } from "./RobotList/Victor";

interface IProps {}

const robotEntrants = submittedRobots.map(
  (r, index): RobotEntrant => ({
    ...r,
    staticId: index + 1000, //just to make it obvious
  })
);

const RobotWrath: React.FC<IProps> = ({}) => {
  const [robots, setRobots] = useState<RobotCombatant[]>(
    generateCombatants(robotEntrants)
  );

  const [events, setEvents] = useState<TurnEvent[][]>([]);

  const status = useMemo(() => getStatus(robots, events), [robots, events]);

  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (status.filter((s) => s.health > 0).length <= 1) {
      setRunning(false);
      return;
    }

    if (isRunning) {
      const timer = setTimeout(performAdvance, 400);
      return () => clearTimeout(timer);
    }
  }, [isRunning, events]);

  const victor = (() => {
    const victorId = getVictor(status);

    if (victorId == -1) {
      return null;
    } else {
      return robots.find((r) => r.id == victorId);
    }
  })();

  function performAdvance() {
    setEvents(events.concat([advance(robots, events)]));
  }

  return (
    <div
      style={{
        width: "calc(100vw - 400px)",
        height: "calc(100vh - 100px)",
        padding: "50px 200px",
        backgroundColor: "#bfbfde",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: 10, display: "flex" }}>
        <button
          className={styles.niceButton}
          onClick={() => {
            setRobots(generateCombatants(robotEntrants));
            setRunning(false);
            setEvents([]);
          }}
        >
          Reset Battle
        </button>
        <button
          className={styles.niceButton}
          onClick={() => {
            performAdvance();
            setRunning(false);
          }}
          disabled={victor !== undefined}
        >
          Advance
        </button>
        <button
          className={
            styles.niceButton + (isRunning ? " " + styles.pressedIn : "")
          }
          onClick={() => setRunning(!isRunning)}
          style={{ width: 220 }}
          disabled={victor !== undefined}
        >
          {isRunning ? "Stop Auto Battling" : "Auto Battle"}
        </button>
        <button
          className={styles.niceButton}
          onClick={() => {
            if (victor === undefined) {
              setEvents(simulateGame(robots, events));
            } else {
              const combatants = generateCombatants(robotEntrants);
              setRobots(combatants);
              setEvents(simulateGame(combatants, []));
            }
          }}
        >
          Perform Full Battle
        </button>
      </div>
      <div style={{ flex: 1, overflow: "hidden", display: "flex" }}>
        <div style={{ height: "100%" }}>
          <RobotList robots={robots} status={status} />
        </div>
        <div style={{ height: "100%", marginLeft: 100 }}>
          <EventList robots={robots} events={events} />
        </div>
      </div>
      <div>
        <Victor robot={victor} />
      </div>
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
