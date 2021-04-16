import React, { useEffect, useState } from "react";
import boom from "../Images/boom.png";
import { RobotCombatant, RobotStatus } from "../interfaces";
import styles from "./robotList.module.css";

interface IProps {
  robot?: RobotCombatant | null;
}

const Victor: React.FC<IProps> = ({ robot }) => {
  const [internalBot, setInternalBot] = useState<RobotCombatant | null>(null);

  useEffect(() => {
    if (robot !== undefined) {
      setInternalBot(robot);
    }
  }, [robot]);

  function getText() {
    if (internalBot != null) {
      return internalBot.name + " emerges the victor!";
    } else {
      return "No one wins!!!";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: robot !== undefined ? 200 : 0,
        transition: "0.5s",
        overflowY: "hidden",
      }}
    >
      <div className={styles.victor}>
        <img
          src={internalBot ? internalBot.icon : boom}
          style={{
            border: "6px solid " + (internalBot ? internalBot.color : "#000"),
          }}
        />
        <span style={{ marginLeft: 10, fontSize: internalBot ? 30 : 40 }}>
          {getText()}
        </span>
      </div>
    </div>
  );
};

Victor.displayName = "Victor";
export { Victor };
