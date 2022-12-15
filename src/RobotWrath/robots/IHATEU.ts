import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  attackers: { id: number; attacks: number }[];
}

const IHATEU: Robot<Memory> = {
  name: "I HATE U",
  color: "#2986cc",
  icon: "http://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/donkey.jpeg",
  author: "Eduardo ;)",
  init: (yourId, enemyIds) => {
    return {
      attackers: enemyIds.map((r) => ({
        id: r,
        attacks: 0,
      })),
    };
  },
  execute: (you, enemies, memory) => {
    var killables = enemies.filter((e) => e.health < you.power);
    if (killables.length > 0) {
      return killables[0].robotId;
    } else {
      var weaklings = enemies.filter((e) => e.power / 2 < you.power);
      if (weaklings.length > 0) {
        return weaklings[0].robotId;
      }
    }
    return undefined;
  },
};

export { IHATEU };
