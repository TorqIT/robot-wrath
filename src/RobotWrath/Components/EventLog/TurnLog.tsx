import React from "react";
import { RobotCombatant, TurnEvent } from "../../interfaces";
import "./eventLog.css";
import { RobotAction, RobotActionProps } from "./RobotAction";

interface IProps {
  robots: RobotCombatant[];
  events: TurnEvent[];
  turn: number;
  displayTurn?: number;
  onClick: () => void;
}

const TurnLog: React.FC<IProps> = ({
  robots,
  events,
  turn,
  displayTurn,
  onClick,
}) => {
  function get(id: number) {
    return robots.find((r) => r.id == id)!;
  }

  const robotsBlockingNothing = events.filter(
    (e) => !e.target && !events.some((other) => other.target == e.robotId)
  );
  const attackedRobots = events
    .filter((e) => e.target)
    .reduce((robotActions, e) => {
      const action = robotActions.find((a) => a.target.id == e.target);

      if (action) {
        action.attackers.push(get(e.robotId));
      } else {
        robotActions.push({
          attackers: [get(e.robotId)],
          target: get(e.target!),
          isBlocking:
            events.find((other) => other.robotId == e.target)?.target == null,
        });
      }

      return robotActions;
    }, [] as RobotActionProps[]);

  function getClass() {
    if (displayTurn === undefined || displayTurn > turn) {
      return "";
    } else if (displayTurn == turn) {
      return "selected";
    } else {
      return "disabled";
    }
  }

  return (
    <div className={"turnLog" + " " + getClass()} onClick={onClick}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>TURN {turn}</div>
      {robotsBlockingNothing.map((e) => (
        <RobotAction
          key={e.robotId}
          attackers={[]}
          target={get(e.robotId)}
          isBlocking={true}
        />
      ))}
      {attackedRobots.map((r) => (
        <RobotAction key={r.target.id} {...r} />
      ))}
    </div>
  );
};

TurnLog.displayName = "TurnLog";
export { TurnLog };
