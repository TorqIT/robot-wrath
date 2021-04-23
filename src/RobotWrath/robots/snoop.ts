import { robotIcons } from "../Images";
import { Robot, RobotStatus } from "../interfaces";
type PreviousHits = Record<number, number[]>;
interface Memory {
  previousHits: PreviousHits;
  themeSong: HTMLAudioElement;
}
const snoop: Robot<Memory> = {
  name: "Snoop",
  color: "#FFFFFF",
  icon: "/snoop.png",
  author: "NOT CHRIS",
  init: (yourId, enemyIds) => {
    return {
      themeSong: new Audio("/snoop-theme.mp3"),
      previousHits: [],
    };
  },
  execute: (me, enemies, memory) => {
    // if (Object.keys(memory.previousHits).length === 0) {
    //   memory.themeSong.loop = false;
    //   memory.themeSong.play();
    // }
    const strongestEnemy = getMaxPower(enemies);
    const targets = enemies
      .map((enemy) => {
        findPreviousHits(enemy, memory);
        return enemy;
      })
      .filter((enemy) => !canKillMe(me, enemy))
      .sort((a, b) => a.power + b.power);
    const shouldBlock =
      canBeKilled(me, enemies) ||
      targets.length === 0 ||
      me.health <= strongestEnemy.power * 1.5;
    if (shouldBlock) return;
    const tko = targets.filter((enemy) => canKillThem(me, enemy));
    if (tko.length > 0) return tko[0].robotId;
    return targets[0].robotId;
  },
};
const findPreviousHits = (enemy: RobotStatus, memory: Memory) => {
  if (!memory.previousHits[enemy.robotId])
    memory.previousHits[enemy.robotId] = [];
  if (enemy.lastTarget) {
    memory.previousHits[enemy.robotId].push(enemy.lastTarget);
  }
  return enemy;
};
const getMaxPower = (enemies: RobotStatus[]): RobotStatus =>
  enemies.reduce(
    (highest, current) => (highest.power > current.power ? highest : current),
    enemies[0]
  );
const canKillMe = (me: RobotStatus, enemy: RobotStatus): boolean =>
  enemy.power >= me.health;
const canKillThem = (me: RobotStatus, enemy: RobotStatus): boolean =>
  enemy.health <= me.power;
const canBeKilled = (me: RobotStatus, enemies: RobotStatus[]) => {
  const totalPower = enemies.reduce(
    (totalPower, enemy) => totalPower + enemy.power,
    0
  );
  return totalPower >= me.health;
};
export { snoop };
