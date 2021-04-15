import React, { useMemo, useState } from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots as submittedRobots } from "./robots";
import { RobotCombatant, TurnEvent } from "./interfaces";
import { advance, generateCombatants, getStatus } from "./gameLogic";
import { EventList } from "./EventList";
import styles from "./robotWrath.module.css";

interface IProps {}

const RobotWrath: React.FC<IProps> = ({}) => {
  const [robots, setRobots] = useState<RobotCombatant[]>(
    generateCombatants(submittedRobots)
  );

  const [events, setEvents] = useState<TurnEvent[][]>([]);

  const status = useMemo(() => getStatus(robots, events), [robots, events]);

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
            setRobots(generateCombatants(submittedRobots));
            setEvents([]);
          }}
        >
          Reset Battle
        </button>
        <button
          className={styles.niceButton}
          onClick={() => setEvents(events.concat([advance(robots, events)]))}
          disabled={status.filter((s) => s.health > 0).length <= 1}
        >
          Advance
        </button>
      </div>
      <div style={{ flex: 1, overflowY: "hidden", display: "flex" }}>
        <div style={{ height: "100%" }}>
          <RobotList robots={robots} status={status} />
        </div>
        <div style={{ height: "100%", marginLeft: 100 }}>
          <EventList robots={robots} events={events} />
        </div>
      </div>
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
