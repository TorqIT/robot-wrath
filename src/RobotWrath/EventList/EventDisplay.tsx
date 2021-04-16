import React from "react";
import { Robot, RobotCombatant, TurnEvent } from "../interfaces";

interface IProps {
  robots: RobotCombatant[];
  event: TurnEvent;
}

const EventDisplay: React.FC<IProps> = ({ robots, event }) => {
  function find(id: number) {
    return robots.find((r) => r.id == id)!;
  }

  if (event.target) {
    return (
      <div>
        {find(event.robotId).name} attacked{" "}
        {event.target == event.robotId ? "ITSELF" : find(event.target).name}!
        <i style={{ fontSize: 11 }}> ({event.executionTime}ms)</i>
      </div>
    );
  } else {
    return (
      <div>
        {find(event.robotId).name} blocked!
        <i style={{ fontSize: 11 }}> ({event.executionTime}ms)</i>
      </div>
    );
  }
};

EventDisplay.displayName = "EventDisplay";
export { EventDisplay };
