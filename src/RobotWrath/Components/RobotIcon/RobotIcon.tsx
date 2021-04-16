import React from "react";
import { Robot } from "../../interfaces";
import boomIcon from "./boom.png";

interface IProps {
  robot?: Robot<object> | null;
  boom?: boolean;
}

const RobotIcon: React.FC<IProps> = ({ robot, boom }) => {
  return (
    <img
      src={robot && !boom ? robot.icon : boomIcon}
      style={{
        border: "6px solid " + (robot ? robot.color : "#000"),
      }}
    />
  );
};

RobotIcon.displayName = "RobotIcon";
export { RobotIcon };
