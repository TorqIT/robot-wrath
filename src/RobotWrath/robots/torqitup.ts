import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const torqitup: Robot<Memory> = {
  name: "Torq It Up",
  color: "#28e1d0",
  icon: robotIcons.saber,
  author: "David",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    if (you.health >= 750) {
        let baddies = enemies.filter(
            robot => robot.lastTarget == you.robotId
        );
        
        if (baddies.length > 0) {
            return baddies.sort(robot => robot.health)[0].robotId;
        }

        return enemies.reduce((lowest, current) =>
            lowest.health < current.health ? lowest : current
        ).robotId;
    } else if (you.health >= 500 && you.health < 750) {
        return enemies.reduce((lowest, current) =>
            lowest.health > current.health ? lowest : current
        ).robotId;
    } else if (you.health >= 250 && you.health < 500) {
        let baddies = enemies.filter(
            robot => robot.lastTarget == you.robotId
        );
        
        if (baddies.length > 0) {
            return baddies.sort(robot => robot.health)[0].robotId;
        }

        return enemies.reduce((lowest, current) =>
            lowest.health < current.health ? lowest : current
        ).robotId;
    } else if (you.health >= 100 && you.health < 250) {
        let baddies = enemies.filter(
            robot => robot.lastTarget == you.robotId
        );
        
        if (baddies.length > 0) {
            return baddies.sort(robot => robot.health)[0].robotId;
        }

        return undefined;
    } else if (you.health >= 50 && you.health < 100) {
        let baddies = enemies.filter(
            robot => robot.lastTarget == you.robotId
        );
        
        if (baddies.length > 0) {
            return baddies.sort(robot => robot.health)[0].robotId;
        }

        return undefined;
    }
  },
};

export { torqitup };
