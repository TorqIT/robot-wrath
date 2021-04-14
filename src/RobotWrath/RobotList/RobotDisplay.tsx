import React from "react";
import { Robot } from "../robots/interfaces";
import styles from "./robotList.module.css";
import robotImage from "./robot.png";

interface IProps {
  robot: Robot;
}

const RobotDisplay: React.FC<IProps> = ({ robot }) => {
  return (
    <div className={styles.robotDisplay}>
      <div className={styles.internal}>
        <img src={robotImage} style={{ border: "6px solid " + robot.color }} />
        <div className={styles.name}>{robot.name}</div>
      </div>
    </div>
  );
};

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
