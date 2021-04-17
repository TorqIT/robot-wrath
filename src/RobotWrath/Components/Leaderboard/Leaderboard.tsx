import React from "react";
import FlipMove from "react-flip-move";
import { Robot, RobotEntrant, VictoryLog } from "../../interfaces";
import { LeaderboardEntry } from "./LeaderboardEntry";

interface IProps {
  robots: RobotEntrant[];
  records: VictoryLog[];
}

const Leaderboard: React.FC<IProps> = ({ robots, records }) => {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "scroll",
        backgroundColor: "white",
        width: 337,
      }}
    >
      <FlipMove>
        {records
          .sort((a, b) => b.wins - a.wins)
          .map((vl) => (
            <LeaderboardEntry
              key={vl.robotStaticId ?? -1}
              robot={robots.find((r) => r.staticId == vl.robotStaticId)}
              wins={vl.wins}
            />
          ))}
      </FlipMove>
    </div>
  );
};

Leaderboard.displayName = "Leaderboard";
export { Leaderboard };
