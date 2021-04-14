import React from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots } from "./robots";

interface IProps {}

const RobotWrath: React.FC<IProps> = ({}) => {
  return (
    <div
      style={{
        width: "calc(100vw - 400px)",
        height: "calc(100vh - 200px)",
        padding: "100px 200px",
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
