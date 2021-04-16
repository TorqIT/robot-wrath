import React, { forwardRef } from "react";
import { Robot, RobotCombatant, RobotStatus } from "../interfaces";
import styles from "./robotList.module.css";
import robotImage from "../Images/robot.png";
import boomImage from "../Images/boom.png";

interface IProps {
  robot: RobotCombatant;
  status: RobotStatus;
}

const RobotDisplay: React.FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({ robot, status }, ref) => {
    const displayHealth = Math.max(status.health, 0);

    return (
      <div ref={ref} className={styles.robotDisplay}>
        <div className={styles.internal}>
          <img
            src={status.health > 0 ? robot.icon : boomImage}
            style={{ border: "6px solid " + robot.color }}
          />
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
                    {displayHealth}
                  </div>
                  <div
                    className={styles.filledHealthBar}
                    style={{ width: displayHealth / 10 + "%" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        left: 10,
                        color: "black",
                      }}
                    >
                      {displayHealth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
