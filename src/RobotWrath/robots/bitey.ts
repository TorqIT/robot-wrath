import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  blockCount: number;
  lastAttacker?: number;
}

const bitey: Robot<Memory> = {
  name: "Bitey",
  color: "#FF0000",
  icon: robotIcons.chomp,
  author: "Nick",
  init: (yourId, enemyIds) => {
    return {
      blockCount: 0,
    };
  },
  execute: (you, enemies, memory) => {
    if (memory.blockCount !== 4) {
      memory.blockCount++;
    } else {
      memory.blockCount = 0;
      return undefined;
    }

    const lastAttacker = enemies.find(
      (e) => e.lastTarget === you.robotId
    )?.robotId;

    if (lastAttacker != null) {
      memory.lastAttacker = lastAttacker;
    }

    return enemies.find((e) => e.robotId === memory.lastAttacker)?.robotId;
  },
};

export { bitey };
