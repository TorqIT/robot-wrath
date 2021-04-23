import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const death: Robot<Memory> = {
  name: "Death",
  color: "#ffa500",
  icon: robotIcons.default,
  author: "Dalton/Logan",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    return undefined;
  },
};

export { death };
