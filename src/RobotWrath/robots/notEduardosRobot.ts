import { memo } from "react";
import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
    turn: number;
    deadlyTarget: number | undefined;
}

const notEduardosRobot: Robot<Memory> = {
  name: "NotEduardosRobot",
  color: "#23856d",
  icon: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/10/Jack_Shining.png",
  author: "Not Eduardo",
  init: (yourId, enemyIds) => {
    return {
        turn: 0,
        deadlyTarget: undefined,
    };
  },
  execute: (you, enemies, memory) => {
    if (you.health > 800) {
        return;
    } else {
        if (memory.deadlyTarget == undefined) {
            memory.deadlyTarget = enemies.sort(e => e.health)[0].robotId;
        }
        if (enemies.find(e => e.robotId == memory.deadlyTarget)) {
            return memory.deadlyTarget;
        } else {
            memory.deadlyTarget = enemies.sort(e => e.health)[0].robotId;
            return memory.deadlyTarget;
        }
    }
  },
};

export { notEduardosRobot };
