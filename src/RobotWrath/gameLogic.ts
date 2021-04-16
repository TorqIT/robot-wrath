import arrayShuffle from "array-shuffle";
import cloneDeep from "clone-deep";
import { stat } from "fs";
import {
  Robot,
  RobotCombatant,
  RobotEntrant,
  RobotStatus,
  TurnEvent,
} from "./interfaces";

const SUDDEN_DEATH = 1000;
const SUDDEN_DEATH_DAMAGE_PER_TURN = 25;

export function generateCombatants(robots: RobotEntrant[]): RobotCombatant[] {
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

  events.forEach((e, index) => {
    state = applyEvents(state, e, index > SUDDEN_DEATH);
  });

  return state;
}

function applyEvents(
  robots: RobotStatus[],
  events: TurnEvent[],
  suddenDeath: boolean
): RobotStatus[] {
  return robots.map((r) => {
    if (r.health <= 0) {
      return { ...r };
    }

    const selfAction = events.find((e) => e.robotId == r.robotId)!;
    const eventsTargettingSelf = events.filter((e) => e.target == r.robotId);

    const healthChange = eventsTargettingSelf.reduce(
      (acc, current) =>
        acc -
        robots.find((attacker) => attacker.robotId == current.robotId)!.power,
      0
    );
    const powerChange = eventsTargettingSelf.length;

    return {
      robotId: r.robotId,
      health:
        r.health +
        (selfAction.target ? healthChange : Math.floor(healthChange / 2)) -
        (suddenDeath ? SUDDEN_DEATH_DAMAGE_PER_TURN : 0),
      power: Math.max(
        r.power + (selfAction.target ? powerChange : powerChange * 2 - 1),
        1
      ),
      lastTarget: selfAction.target,
    };
  });
}

export function advance(
  robots: RobotCombatant[],
  events: TurnEvent[][]
): TurnEvent[] {
  const statuses = getStatus(robots, events);
  const livingRobotStatuses = statuses.filter((s) => s.health > 0);
  const previousEvents =
    events.length != 0 ? events[events.length - 1] : undefined;

  return robots
    .filter((r) => livingRobotStatuses.some((s) => s.robotId == r.id))
    .map(
      (r): TurnEvent => {
        const currentMemory = previousEvents
          ? cloneDeep(
              previousEvents.find((e) => e.robotId == r.id)!.resultingMemory
            )
          : r.init(
              r.id,
              robots
                .filter((other) => other.id != r.id)
                .map((other) => other.id)
            );
        let target: number | undefined = undefined;

        const start = performance.now();
        try {
          target = r.execute(
            livingRobotStatuses.find((s) => s.robotId == r.id)!,
            livingRobotStatuses.filter((s) => s.robotId != r.id),
            currentMemory
          );
        } catch (e) {
          target = r.id;
        }
        const end = performance.now();

        return {
          robotId: r.id,
          target,
          executionTime: Math.ceil(end - start),
          resultingMemory: currentMemory,
        };
      }
    );
}

export function simulateGame(robots: RobotCombatant[], events: TurnEvent[][]) {
  let currentEvents = events.slice();
  let statuses = getStatus(robots, currentEvents);

  let turn = 0;

  while (statuses.filter((s) => s.health > 0).length > 1) {
    const nextEvents = advance(robots, currentEvents);
    statuses = applyEvents(statuses, nextEvents, turn > SUDDEN_DEATH);
    currentEvents = currentEvents.concat([nextEvents]);
    turn++;
  }

  return { events: currentEvents, victor: getVictor(statuses) };
}

export function getVictor(status: RobotStatus[]): number | undefined {
  const livingRobots = status.filter((s) => s.health > 0);

  if (livingRobots.length > 1) {
    return;
  }
  if (livingRobots.length == 1) {
    return livingRobots[0].robotId;
  }
  return -1;
}
