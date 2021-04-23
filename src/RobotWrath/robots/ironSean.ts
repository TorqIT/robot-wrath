import { robotIcons } from "../Images";
import { Robot, RobotStatus } from "../interfaces";

interface Memory {
  robots: RobotStats[];
}

interface RobotStats {
  id: number;
  attackedTarget: number[];
  attack: number;
  defend: number;
  timesAttacked: number;
  timesDefended: number;
}

export const ironSean: Robot<Memory> = {
  name: "IronSean",
  color: "#0000FF",
  icon: "http://thecatapi.com/api/images/get?format=src&type=gif",
  author: "Sean",
  init: (yourId, enemyIds) => {
    let stats: RobotStats[] = [];
    [yourId, ...enemyIds].map((id) => (stats[id] = initRobotStats(id)));

    return { robots: stats };
  },
  execute: (you, enemies, memory) => {
    updateMemory(memory, [you, ...enemies]);

    if (enemies.length === 1) {
      const enemy = enemies[0];
      if (enemy.power > you.power && enemy.health > you.health) {
        return;
      } else return enemy.robotId;
    }

    if (
      you.health >
      enemies.reduce((maxHealth, enemy) => {
        if (enemy.health > maxHealth) return enemy.health;
        else return maxHealth;
      }, 0)
    ) {
      return;
    }

    // if (
    //   you.power >
    //   enemies.reduce((maxPower, enemy) => {
    //     if (enemy.power > maxPower) return enemy.power;
    //     else return maxPower;
    //   }, 0)
    // ) {
    //   return;
    // }

    // find least defending robot
    const target = enemies.reduce((target, enemy) => {
      const targetStats = memory.robots[target.robotId];
      const enemyStats = memory.robots[enemy.robotId];
      if (
        enemyStats.defend / enemyStats.attack <
        targetStats.defend / targetStats.attack
      ) {
        return enemy;
      } else return target;
    }, enemies[0]);

    return target.robotId;
  },
};

function initRobotStats(id: number): RobotStats {
  return {
    id: id,
    attackedTarget: [],
    attack: 0,
    defend: 0,
    timesAttacked: 0,
    timesDefended: 0,
  };
}

function updateMemory(memory: Memory, enemies: RobotStatus[]) {
  enemies.map((enemy) => {
    const id = enemy.robotId;
    const stat = memory.robots[id];
    if (enemy.lastTarget) {
      stat.attack++;
      stat.attackedTarget[enemy.lastTarget]++;

      updateTargetMemory(
        memory.robots[enemy.lastTarget],
        enemies.find((e) => e.robotId === enemy.lastTarget)
      );
    } else {
      stat.defend++;
    }
  });
}

function updateTargetMemory(
  targetStats: RobotStats,
  targetAction?: RobotStatus
) {
  if (targetAction?.lastTarget) {
    targetStats.timesAttacked++;
  } else targetStats.timesDefended++;
}
