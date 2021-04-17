import React, { useEffect, useRef } from "react";
import { RobotCombatant, TurnEvent } from "../../interfaces";
import "./eventLog.css";
import { TurnLog } from "./TurnLog";

interface IProps {
  robots: RobotCombatant[];
  events: TurnEvent[][];
  displayTurn?: number;
  onTurnSelect: (turn: number) => void;
}

const EventLog: React.FC<IProps> = ({
  robots,
  events,
  displayTurn,
  onTurnSelect,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  return (
    <div className="eventLog">
      {events.map((turnEvents, index) => (
        <TurnLog
          key={index}
          turn={index + 1}
          displayTurn={displayTurn !== undefined ? displayTurn + 1 : undefined}
          robots={robots}
          events={turnEvents}
          onClick={() => onTurnSelect(index)}
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
};

EventLog.displayName = "EventLog";
export { EventLog };
