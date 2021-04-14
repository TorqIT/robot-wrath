import React, { useMemo, useState } from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots as submittedRobots } from "./robots";
import { RobotCombatant } from "./interfaces";
import { generateCombatants, getStatus } from "./utils";

interface IProps {}

const RobotWrath: React.FC<IProps> = ({}) => {
  const [robots, setRobots] = useState<RobotCombatant[]>(
    generateCombatants(submittedRobots)
  );

  const status = useMemo(() => getStatus(robots), [robots]);

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
      <RobotList robots={robots} status={status} />
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
