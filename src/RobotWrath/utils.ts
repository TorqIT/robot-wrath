import arrayShuffle from "array-shuffle";
import { Robot, RobotCombatant, RobotStatus } from "./interfaces";

export function generateCombatants(robots: Robot[]): RobotCombatant[] {
  return arrayShuffle(robots).map((r, index) => ({ ...r, id: index }));
}

export function getStatus(robots: RobotCombatant[]): RobotStatus[] {
  return robots.map(
    (r): RobotStatus => ({
      robotId: r.id,
      health: 1000,
      power: 10,
    })
  );
}
