import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const iHateBotOne: Robot<Memory> = {
  name: "I Hate Bot One (Unless it's me)",
  color: "#FFFFFF",
  icon: robotIcons.mal,
  author: "Nick",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    return enemies[0].robotId;
  },
};

export { iHateBotOne };
