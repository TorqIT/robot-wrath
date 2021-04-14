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
          <div className={styles.stats}>
            <div className={styles.powerWrapper}>
              Power: <span className={styles.power}>{status.power}</span>
            </div>
            <div className={styles.healthWrapper}>
              Health:
              <div className={styles.healthBar}>
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 10,
                    color: "white",
                  }}
                >
                  {status.health}
                </div>
                <div
                  className={styles.filledHealthBar}
                  style={{ width: status.health / 10 + "%" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      left: 10,
                      color: "black",
                    }}
                  >
                    {status.health}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
