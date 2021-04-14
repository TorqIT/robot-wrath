import React from "react";
import { Robot } from "../robots/interfaces";
import { RobotDisplay } from "./RobotDisplay";

interface IProps {
  robots: Robot[];
}

const RobotList: React.FC<IProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((r, index) => (
        <RobotDisplay key={index} robot={r} />
      ))}
    </div>
  );
};

RobotList.displayName = "RobotList";
export { RobotList };
