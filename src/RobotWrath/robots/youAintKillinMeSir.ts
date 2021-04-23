import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const youAintKillinMeSir: Robot<Memory> = {
  name: "YouAintKillinMeSir",
  color: "#FFFFFF",
  icon: robotIcons.default,
  author: "YouAintKillinMeSir",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    // if (you.health <= 100) {
    //     alert('YOU AINT KILLIN ME SIR');
    //     window.close();
    // }

    return enemies.reduce((highest, current) =>
      highest.power > current.power ? highest : current
    ).robotId;
  },
};

export { youAintKillinMeSir };
