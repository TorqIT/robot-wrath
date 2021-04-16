import React from "react";
import { Robot } from "../../interfaces";
import boomIcon from "./boom.png";

interface IProps {
  robot?: Robot<object> | null;
  boom?: boolean;
  small?: boolean;
}

const RobotIcon: React.FC<IProps> = ({ robot, boom, small }) => {
  return (
    <img
      src={robot && !boom ? robot.icon : boomIcon}
      style={{
        borderWidth: small ? 3 : 6,
        borderStyle: "solid",
        borderColor: robot ? robot.color : "#000",
        width: small ? 40 : undefined,
        height: small ? 40 : undefined,
      }}
    />
  );
};

RobotIcon.displayName = "RobotIcon";
export { RobotIcon };
