import React from "react";
import { Robot } from "../robots/interfaces";

interface IProps {
  robot: Robot;
}

const RobotDisplay: React.FC<IProps> = ({ robot }) => {
  return <div>{robot.name}</div>;
};

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
