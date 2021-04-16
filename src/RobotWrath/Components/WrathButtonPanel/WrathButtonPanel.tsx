import React from "react";
import styles from "./wrathButtonPanel.module.css";

interface IProps {
  onReset: () => void;
  onAdvance: () => void;
  onAutoBattle: () => void;
  onPerformFull: () => void;
  onPerformMany: () => void;
  isRunning: boolean;
  hasVictor: boolean;
}

const WrathButtonPanel: React.FC<IProps> = ({
  onReset,
  onAdvance,
  onAutoBattle,
  onPerformFull,
  onPerformMany,
  isRunning,
  hasVictor,
}) => {
  return (
    <div style={{ marginBottom: 10, display: "flex" }}>
      <button className={styles.niceButton} onClick={onReset}>
        Reset Battle
      </button>
      <button
        className={styles.niceButton}
        onClick={onAdvance}
        disabled={hasVictor}
      >
        Advance
      </button>
      <button
        className={
          styles.niceButton + (isRunning ? " " + styles.pressedIn : "")
        }
        onClick={onAutoBattle}
        style={{ width: 220 }}
        disabled={hasVictor}
      >
        {isRunning ? "Stop Auto Battling" : "Auto Battle"}
      </button>
      <button className={styles.niceButton} onClick={onPerformFull}>
        Perform Full Battle
      </button>
      <button className={styles.niceButton} onClick={onPerformMany}>
        Perform 10 Battles
      </button>
    </div>
  );
};

WrathButtonPanel.displayName = "WrathButtonPanel";
export { WrathButtonPanel };
