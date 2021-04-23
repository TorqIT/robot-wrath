import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const sean: Robot<Memory> = {
  name: "Sean",
  color: "#FFFFFF",
  icon:
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/38279401_10160540217560431_4618596474777763840_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1McnHvpM9HgAX8dhsfx&_nc_ht=scontent-lga3-1.xx&oh=e7dd8682a879a7be31af750ffaa915fa&oe=60A6F40B",
  author: "Eduardo",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    // if (you.health < 50) {
    //   window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    // }
    return enemies[Math.floor(Math.random() * enemies.length)].robotId;
  },
};

export { sean };
