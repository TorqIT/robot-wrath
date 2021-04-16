import React, { useEffect, useRef } from "react";
import { RobotCombatant, TurnEvent } from "../../interfaces";
import { EventDisplay } from "./EventDisplay";

interface IProps {
  robots: RobotCombatant[];
  events: TurnEvent[][];
}

const EventList: React.FC<IProps> = ({ robots, events }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  return (
    <div
      style={{
        height: "100%",
        width: 400,
        backgroundColor: "white",
        overflowY: "auto",
      }}
    >
      {events.map((turnEvents, index) => (
        <div key={index}>
          <div>--</div>
          <div>TURN {index + 1}</div>
          <div>--</div>
          {turnEvents.map((event, index) => (
            <EventDisplay key={index} robots={robots} event={event} />
          ))}
        </div>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

EventList.displayName = "EventList";
export { EventList };
