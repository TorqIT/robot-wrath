import { Robot } from "../interfaces";

interface Memory {
  mySuperSecretTargetId: number;
}

const EvansRealBot: Robot<Memory> = {
  name: "EvansRealBot",
  color: "#FFFFFF",
  icon: "https://media.giphy.com/media/KtAyE3yFfsyLC/giphy.gif",
  author: "Obviously Evan",
  init: (yourId, enemyIds) => {
    return {
      mySuperSecretTargetId: enemyIds[0],
    };
  },
  execute: (you, enemies, memory) => {
    if (!enemies.find((e) => e.robotId == memory.mySuperSecretTargetId)) {
      memory.mySuperSecretTargetId = enemies[0].robotId;
    }
    return memory.mySuperSecretTargetId;
  },
};

export { EvansRealBot };
