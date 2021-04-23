import { memo } from "react";
import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
    turn: number;
    deadlyTarget: number | undefined;
}

const switzerland: Robot<Memory> = {
  name: "Switzerland",
  color: "#ff0000",
  icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FEVjROPIyEbJIQEmW8GzwAHaHa%26pid%3DApi&f=1",
  author: "Not Eduardo",
  init: (yourId, enemyIds) => {
    return {
        turn: 0,
        deadlyTarget: undefined,
    };
  },
  execute: (you, enemies, memory) => {
    return undefined;
  },
};

export { switzerland };
