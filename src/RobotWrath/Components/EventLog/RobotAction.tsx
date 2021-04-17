import React from "react";
import { Robot, RobotCombatant, TurnEvent } from "../../interfaces";
import { RobotIcon } from "../RobotIcon";
import "./eventLog.css";
import attackIcon from "./TurnIcons/attack.png";
import blockIcon from "./TurnIcons/block.png";
import badBlockIcon from "./TurnIcons/badBlock.png";

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
    <div className="robotAction">
      <div style={{ width: 175, display: "flex", flexWrap: "wrap" }}>
        {attackers.map((a) => (
          <RobotIcon robot={a} small style={{ margin: 5 }} />
        ))}
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={
            isBlocking
              ? attackers.length == 0
                ? badBlockIcon
                : blockIcon
              : attackIcon
          }
        />
      </div>
      <div>
        <RobotIcon robot={target} small />
      </div>
    </div>
  );
};

RobotAction.displayName = "RobotAction";
export { RobotAction };
