import React, { useEffect, useRef } from "react";
import { RobotCombatant, TurnEvent } from "../../interfaces";
import styles from "./eventLog.module.css";
import { TurnLog } from "./TurnLog";

interface IProps {
  robots: RobotCombatant[];
  events: TurnEvent[][];
}

const EventLog: React.FC<IProps> = ({ robots, events }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  return (
    <div className={styles.eventLog}>
      {events.map((turnEvents, index) => (
        <TurnLog
          key={index}
          turn={index + 1}
          robots={robots}
          events={turnEvents}
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
};

EventLog.displayName = "EventLog";
export { EventLog };
