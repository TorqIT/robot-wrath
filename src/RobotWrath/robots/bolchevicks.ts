import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const bolchevicks: Robot<Memory> = {
  name: "Bolchevicks",
  color: "#FFFFFF",
  icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcommunism-communist-logo-symbol-illustration-22502515.jpg",
  author: "NotEduardosRobot",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    return enemies.sort((e) => e.power)[enemies.length - 1].robotId;
  },
};

export { bolchevicks };
