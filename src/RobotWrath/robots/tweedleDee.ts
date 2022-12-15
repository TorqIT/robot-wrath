import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const tweedleDee: Robot<Memory> = {
  name: "Tweedle Dee",
  color: "#a3230f",
  icon: robotIcons.chomp,
  author: "David",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    if (you.health >= 500) {
        let baddies = enemies.filter(
            robot => robot.lastTarget == you.robotId
        );
        
        if (baddies.length > 0) {
            return baddies.sort(robot => robot.health)[0].robotId;
        }

        return undefined;
    } else {
        return undefined;
    }
  },
};

export { tweedleDee };
