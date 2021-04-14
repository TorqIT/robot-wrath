import React from "react";
import { Robot, RobotCombatant, RobotStatus } from "../interfaces";
import styles from "./robotList.module.css";
import robotImage from "./robot.png";

interface IProps {
  robot: RobotCombatant;
  status: RobotStatus;
}

const RobotDisplay: React.FC<IProps> = ({ robot, status }) => {
  return (
    <div className={styles.robotDisplay}>
      <div className={styles.internal}>
        <img src={robotImage} style={{ border: "6px solid " + robot.color }} />
        <div style={{ padding: 10 }}>
          <div className={styles.name}>{robot.name}</div>
          <div style={{ display: "flex" }}>
            <div>Power: {status.power}</div>
            <div>Health: {status.health}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
