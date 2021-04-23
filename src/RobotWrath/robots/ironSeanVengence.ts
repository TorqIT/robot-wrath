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

export const ironSeanVengance: Robot<Memory> = {
  name: "IronSean - Vengence",
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

    // final 2 logic
    if (enemies.length === 1) {
      const enemy = enemies[0];
      if (enemy.power > you.power * 2 && enemy.health > you.health) {
        return;
      } else return enemy.robotId;
    }

    // if max health defend
    if (
      you.health >
      enemies.reduce((maxHealth, enemy) => {
        if (enemy.health > maxHealth) return enemy.health;
        else return maxHealth;
      }, 0)
    ) {
      return;
    }

    // if max power defend
    // if (
    //   you.power >
    //   enemies.reduce((maxPower, enemy) => {
    //     if (enemy.power > maxPower) return enemy.power;
    //     else return maxPower;
    //   }, 0)
    // ) {
    //   return;
    // }

    // //find the bot attacking me the most
    return enemies.reduce((target, enemy) => {
      const targetStats = memory.robots[target.robotId];
      const enemyStats = memory.robots[enemy.robotId];
      if (
        enemyStats.attackedTarget[you.robotId] <
        targetStats.attackedTarget[you.robotId]
      ) {
        return enemy;
      } else return target;
    }, enemies[0]).robotId;

    // find least defending robot
    // target = enemies.reduce((target, enemy) => {
    //   const targetStats = memory.robots[target.robotId];
    //   const enemyStats = memory.robots[enemy.robotId];
    //   if (
    //     enemyStats.defend / enemyStats.attack <
    //     targetStats.defend / targetStats.attack
    //   ) {
    //     return enemy;
    //   } else return target;
    // }, enemies[0]);

    // //find the bot with the lowest health
    // return enemies.reduce((minHealthEnemy, enemy) => {
    //   if (enemy.health < minHealthEnemy.health) return enemy;
    //   else return minHealthEnemy;
    // }).robotId;

    // //find the bot with the highest power
    // return enemies.reduce((maxPower, enemy) => {
    //   if (enemy.power < maxPower.power) return enemy;
    //   else return maxPower;
    // }).robotId;
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
