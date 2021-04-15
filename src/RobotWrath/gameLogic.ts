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
  return robots.map((r) => {
    if (r.health <= 0) {
      return { ...r };
    }

    const selfAction = events.find((e) => e.robotId == r.robotId)!;
    const eventsTargettingSelf = events.filter((e) => e.target == r.robotId);

    let healthChange = eventsTargettingSelf.reduce(
      (acc, current) =>
        acc -
        robots.find((attacker) => attacker.robotId == current.robotId)!.power,
      0
    );
    let powerChange = eventsTargettingSelf.length;

    return {
      robotId: r.robotId,
      health:
        r.health +
        (selfAction.target ? healthChange : Math.floor(healthChange / 2)),
      power: r.power + (selfAction.target ? powerChange : powerChange * 2 - 1),
    };
  });
}

export function advance(
  robots: RobotCombatant[],
  events: TurnEvent[][]
): TurnEvent[] {
  const statuses = getStatus(robots, events);
  const livingRobotStatuses = statuses.filter((s) => s.health > 0);

  return robots
    .filter((r) => livingRobotStatuses.some((s) => s.robotId == r.id))
    .map(
      (r): TurnEvent => ({
        robotId: r.id,
        target: r.execute(
          livingRobotStatuses.find((s) => s.robotId == r.id)!,
          livingRobotStatuses.filter((s) => s.robotId != r.id)
        ),
      })
    );
}
