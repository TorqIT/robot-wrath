import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  attackedLastTurn: boolean;
}

const bitey: Robot<Memory> = {
  name: "Bitey",
  color: "#EE1155",
  icon: robotIcons.chomp,
  hue: 300,
  author: "Nick",
  init: (yourId, enemyIds) => {
    return {
      attackedLastTurn: false,
    };
  },
  execute: (you, enemies, memory) => {
    const robotsWhoAttackedMe = enemies.filter(
      (e) => e.lastTarget == you.robotId
    );

    if (memory.attackedLastTurn || robotsWhoAttackedMe.length == 0) {
      memory.attackedLastTurn = false;
      return undefined;
    } else if (robotsWhoAttackedMe.length == 1) {
      return robotsWhoAttackedMe[0].robotId;
    } else {
      return robotsWhoAttackedMe.reduce((highestPower, current) =>
        highestPower.power < current.power ? current : highestPower
      ).robotId;
    }
  },
};

export { bitey };
