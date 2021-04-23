import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const sniper: Robot<Memory> = {
  name: "Sniper",
  color: "#FFFFFF",
  icon: robotIcons.chomp,
  author: "Dalton/Logan",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    return enemies.reduce((highestBelowPower, current) =>
      highestBelowPower.health < current.health && current.health <= you.power
        ? current
        : highestBelowPower
    ).robotId;
  },
};

export { sniper };
