import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
    target: number;
}

const hater: Robot<Memory> = {
  name: "Hater",
  color: "#FFFFFF",
  icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DOTPCehKz2lCdph-twJfPwHaI4%26pid%3DApi&f=1",
  author: "I Hate YOUUUU",
  init: (yourId, enemyIds) => {
    return {
        target: enemyIds[Math.floor(Math.random()*enemyIds.length)],
    };
  },
  execute: (you, enemies, memory) => {
    return memory.target;
  },
};

export { hater };
