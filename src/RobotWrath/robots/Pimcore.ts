import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  currentTurn: number;
}

const Pimcore: Robot<Memory> = {
  name: "Pimcore",
  color: "#8A2BE2",
  icon: "https://polargold.de/wp-content/uploads/2021/11/pimconaut-surfer.svg",
  author: "Pimcore Team",
  init: (yourId, enemyIds) => {
    return { currentTurn: 0 };
  },
  execute: (you, enemies, memory) => {
    memory.currentTurn++;

    const highestPowerEnemy = enemies.reduce(function (prev, current) {
      return prev.power > current.power ? prev : current;
    });

    const highestHealthEnemy = enemies.reduce(function (prev, current) {
      return prev.health > current.health ? prev : current;
    });

    const secondHealthiestEnemy = enemies.reduce((prev, current) => {
      if (enemies.length > 1) {
        if ((prev.robotId = highestHealthEnemy.robotId)) {
          return current;
        } else if ((current.robotId = highestHealthEnemy.robotId)) {
          return prev;
        } else {
          return prev.health > current.health ? prev : current;
        }
      } else {
        return enemies[0];
      }
    });

    const healthiestKillableEnemy = enemies.reduce(function (prev, current) {
      if (prev.health <= you.power && current.health <= you.power) {
        return prev.health > current.health ? prev : current;
      } else {
        return prev.health < current.health ? prev : current;
      }
    });

    if ((enemies.length = 1)) {
      return enemies[0].robotId;
    } else {
      if (memory.currentTurn < 20 || you.health > 700 || you.power < 25) {
        return undefined;
      } else if (
        highestHealthEnemy.health >=
        2 * secondHealthiestEnemy.health
      ) {
        return highestHealthEnemy.robotId;
      } else if (you.power >= healthiestKillableEnemy.health) {
        return healthiestKillableEnemy.robotId;
      } else {
        return highestPowerEnemy.robotId;
      }
    }
  },
};

export { Pimcore };
