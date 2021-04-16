import React, { useEffect, useMemo, useState } from "react";
import { robots as submittedRobots } from "./robots";
import { RobotCombatant, RobotEntrant, TurnEvent } from "./interfaces";
import {
  advance,
  generateCombatants,
  getStatus,
  getVictor,
  simulateGame,
} from "./gameLogic";
import { EventList } from "./Components/EventList";
import styles from "./robotWrath.module.css";
import { RobotList, Victor } from "./Components/RobotList";
import { WrathButtonPanel } from "./Components/WrathButtonPanel/WrathButtonPanel";

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
      <WrathButtonPanel
        onReset={() => {
          setRobots(generateCombatants(robotEntrants));
          setRunning(false);
          setEvents([]);
        }}
        onAdvance={() => {
          performAdvance();
          setRunning(false);
        }}
        onAutoBattle={() => setRunning(!isRunning)}
        onPerformFull={() => {
          if (victor === undefined) {
            setEvents(simulateGame(robots, events));
          } else {
            const combatants = generateCombatants(robotEntrants);
            setRobots(combatants);
            setEvents(simulateGame(combatants, []));
          }
        }}
        hasVictor={victor !== undefined}
        isRunning={isRunning}
      />

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
