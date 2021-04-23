import { robotIcons } from "../Images";
import { Robot } from "../interfaces";
import { robots } from "../robots";

interface Memory {
  count: number;
  health: number;
  blockPercent: number;
}

const bubly: Robot<Memory> = {
  name: "Bubly",
  color: "#FF8300",
  hue: 500,
  icon: robotIcons.default,
  author: "Reilly",
  init: (yourId, enemyIds) => {
    return {
      count: 0,
      blockPercent: 0,
      health: 1000,
    };
  },
  execute: (you, enemies, memory) => {
    memory.count++;
    var healthReduction = memory.health - you.health;
    if (healthReduction > 30) {
      memory.health = you.health;
      memory.blockPercent += 0.05;
    }
    if (robots.length === 2) {
      return enemies.reduce((lowest, current) =>
        lowest.health < current.health ? lowest : current
      ).robotId;
    }
    if (memory.count % 2 === 0 && Math.random() < memory.blockPercent)
      return undefined;

    return enemies.reduce((lowest, current) =>
      lowest.health < current.health ? lowest : current
    ).robotId;
  },
};

export { bubly };
