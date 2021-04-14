import React from "react";
import { Robot } from "../robots/interfaces";
import { RobotDisplay } from "./RobotDisplay";
import styles from "./robotList.module.css";

interface IProps {
  robots: Robot[];
}

const RobotList: React.FC<IProps> = ({ robots }) => {
  return (
    <div className={styles.robotList}>
      {robots.map((r, index) => (
        <RobotDisplay key={index} robot={r} />
      ))}
    </div>
  );
};

RobotList.displayName = "RobotList";
export { RobotList };
