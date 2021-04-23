import { count } from "node:console";
import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const shield: Robot<Memory> = {
  name: "Shield",
  color: "#FFFFFF",
  icon: robotIcons.default,
  author: "Dalton/Logan",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    if (enemies.length == 1) {
      return enemies[0].robotId;
    } else {
      return undefined;
    }
  },
};

export { shield };
