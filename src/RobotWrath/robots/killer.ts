import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  turncount: number;
  enemiescount: number;
}

const killer: Robot<Memory> = {
  name: "Killer",
  color: "#FFFFFF",
  icon: "https://i.ytimg.com/vi/1-BfDBTFLSc/maxresdefault.jpg",
  author: "Sue-Ellen",
  init: (yourId, enemyIds) => {
    return {
      turncount: 0,
      enemiescount: enemyIds.length,
    };
  },
  execute: (you, enemies, memory) => {
    var currentbots = enemies.length;
    memory.turncount++;
    if (currentbots > memory.enemiescount / 2) {
      if (memory.turncount % 2 === 0) return undefined;

      return enemies.reduce((lowest, current) =>
        lowest.health < current.health ? lowest : current
      ).robotId;
    } else {
      return enemies.reduce((highest, current) =>
        highest.power > current.power ? highest : current
      ).robotId;
    }
  },
};

export { killer };
