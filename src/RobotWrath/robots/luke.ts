import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  currentTurn: number;
}

const luke: Robot<Memory> = {
  name: "Luke",
  color: "#FFFFFF",
  icon:
    "https://i.pinimg.com/originals/53/4d/7d/534d7d2428742c41cc7d5f866e7b40b3.jpg",
  author: "LUKE",
  init: (yourId, enemyIds) => {
    return { currentTurn: 1 };
  },
  execute: (you, enemies, memory) => {
    memory.currentTurn += 1;

    if (memory.currentTurn < 14) {
      return undefined;
    }

    const highestHealthEnemy = enemies.reduce(function (prev, current) {
      return prev.health > current.health ? prev : current;
    });

    if (enemies.length <= 2) {
      return highestHealthEnemy.robotId;
    }

    if (you.health < 500 && memory.currentTurn % 5 == 0) {
      return undefined;
    }

    return highestHealthEnemy.robotId;
  },
};

export { luke };
