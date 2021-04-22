import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const knockYouDown: Robot<Memory> = {
  name: "Knock You Down",
  color: "#11FF11",
  icon: robotIcons.default,
  author: "Nick",
  hue: 260,
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    return enemies.reduce((highestHealth, current) =>
      current.health > highestHealth.health ? current : highestHealth
    ).robotId;
  },
};

export { knockYouDown };
