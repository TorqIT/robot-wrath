import React from "react";
import styles from "./wrathButtonPanel.module.css";

interface IProps {
  onClick: () => void;
}

const NiceButton: React.FC<IProps> = ({ onClick, children }) => {
  return (
    <button className={styles.niceButton} onClick={onClick}>
      {children}
    </button>
  );
};

NiceButton.displayName = "NiceButton";
export { NiceButton };
