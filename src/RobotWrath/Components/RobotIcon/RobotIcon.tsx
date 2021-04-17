import React from "react";
import { Robot } from "../../interfaces";
import boomIcon from "./boom.png";

interface IProps {
  robot?: Robot<object> | null;
  boom?: boolean;
  small?: boolean;
  style?: React.CSSProperties;
}

const RobotIcon: React.FC<IProps> = ({ robot, boom, small, style }) => {
  return (
    <img
      src={robot && !boom ? robot.icon : boomIcon}
      style={{
        ...style,
        borderWidth: small ? 3 : 6,
        borderStyle: "solid",
        borderColor: robot ? robot.color : "#000",
        width: small ? 40 : 90,
        height: small ? 40 : 90,
      }}
      title={robot?.name ?? "BOOM"}
    />
  );
};

RobotIcon.displayName = "RobotIcon";
export { RobotIcon };
