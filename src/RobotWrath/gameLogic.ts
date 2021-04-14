import arrayShuffle from "array-shuffle";
import { stat } from "fs";
import { Robot, RobotCombatant, RobotStatus, TurnEvent } from "./interfaces";

export function generateCombatants(robots: Robot[]): RobotCombatant[] {
  return arrayShuffle(robots).map((r, index) => ({ ...r, id: index + 1 }));
}

export function getStatus(
  robots: RobotCombatant[],
  events: TurnEvent[][]
): RobotStatus[] {
  let state = robots.map(
    (r): RobotStatus => ({
      robotId: r.id,
      health: 1000,
      power: 10,
    })
  );

  events.forEach((e) => {
    state = applyEvents(state, e);
  });

  return state;
}

function applyEvents(
  robots: RobotStatus[],
  events: TurnEvent[]
): RobotStatus[] {
  const endState = robots.map((r) => ({ ...r }));

  events.forEach((e) => {
    if (e.target) {
      const attackerCurrent = robots.find((r) => r.robotId == e.robotId)!;
      const defenderResult = endState.find((r) => r.robotId == e.target)!;

      if (events.find((de) => de.robotId == e.target)?.target) {
        defenderResult.health -= attackerCurrent.power;
        defenderResult.power++;
      } else {
        defenderResult.health -= Math.floor(attackerCurrent.power / 2);
        defenderResult.power += 2;
      }
    } else {
      const selfResult = endState.find((r) => r.robotId == e.robotId)!;
      selfResult.power -= 1;
    }
  });

  return endState;
}

export function advance(
  robots: RobotCombatant[],
  events: TurnEvent[][]
): TurnEvent[] {
  const statuses = getStatus(robots, events);
  const livingRobots = robots.filter((r) =>
    statuses.some((s) => s.robotId == r.id)
  );

  return robots
    .filter((r) => statuses.some((s) => s.robotId == r.id))
    .map(
      (r): TurnEvent => ({
        robotId: r.id,
        target: r.execute(
          statuses.find((s) => s.robotId == r.id)!,
          statuses.filter((s) => s.robotId != r.id)
        ),
      })
    );
}
