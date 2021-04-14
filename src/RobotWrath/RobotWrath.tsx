import React from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots } from "./robots";

interface IProps {}

const RobotWrath: React.FC<IProps> = ({}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#bfbfde",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RobotList robots={robots} />
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
