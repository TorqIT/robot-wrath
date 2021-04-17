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
    <div
      style={{
        ...style,
        borderWidth: small ? 3 : 6,
        borderStyle: "solid",
        borderColor: robot ? robot.color : "#000",
        width: small ? 40 : 90,
        height: small ? 40 : 90,
      }}
    >
      <img
        src={robot && !boom ? robot.icon : boomIcon}
        style={{
          width: small ? 40 : 90,
          height: small ? 40 : 90,
          filter:
            "hue-rotate(" + (robot?.hue && !boom ? robot.hue : 0) + "deg)",
        }}
        title={robot?.name ?? "BOOM"}
      />
    </div>
  );
};

RobotIcon.displayName = "RobotIcon";
export { RobotIcon };
