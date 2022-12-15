import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const WellWellWell: Robot<Memory> = {
  name: "Don't Believe the Stats I WON",
  color: "#000000",
  icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2F327274b2e829fccb2871101cd3c53b2a%2Ftenor.gif&f=1&nofb=1",
  author: "Whoof",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    if (
      enemies.filter((e) => e.power < you.power).length >
      enemies.length * 0.75
    ) {
      return enemies[0].robotId;
    } else {
      return undefined;
    }
  },
};

export { WellWellWell };
