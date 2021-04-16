import React, { forwardRef } from "react";
import { Robot } from "../../interfaces";
import { RobotIcon } from "../RobotIcon";
import styles from "./leaderboard.module.css";

interface IProps {
  robot?: Robot<object>;
  wins: number;
}

const LeaderboardEntry: React.FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({ robot, wins }, ref) => {
    return (
      <div ref={ref} className={styles.leaderboardEntry}>
        <RobotIcon robot={robot} small />
        <div style={{ marginLeft: 10, fontSize: 17 }}>{robot?.name}</div>
        <div style={{ flex: 1 }}></div>
        <div>
          {wins} {robot ? "wins" : "draws"}
        </div>
      </div>
    );
  }
);

LeaderboardEntry.displayName = "LeaderboardEntry";
export { LeaderboardEntry };
