import React from "react";
import { Robot, RobotCombatant, TurnEvent } from "../../interfaces";
import { RobotIcon } from "../RobotIcon";
import styles from "./eventLog.module.css";

export interface RobotActionProps {
  attackers: RobotCombatant[];
  target: RobotCombatant;
  isBlocking: boolean;
}

const RobotAction: React.FC<RobotActionProps> = ({
  attackers,
  target,
  isBlocking,
}) => {
  return (
    <div className={styles.robotAction}>
      <div style={{ width: 175, display: "flex", flexWrap: "wrap" }}>
        {attackers.map((a) => (
          <RobotIcon robot={a} small style={{ margin: 5 }} />
        ))}
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        {isBlocking
          ? attackers.length == 0
            ? "OOPS"
            : "BLOCKED BY"
          : "ATTACKED"}
      </div>
      <div>
        <RobotIcon robot={target} small />
      </div>
    </div>
  );
};

RobotAction.displayName = "RobotAction";
export { RobotAction };
