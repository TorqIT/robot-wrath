import { Robot } from "../interfaces";

interface Memory {}

const h4ck3rm4n: Robot<Memory> = {
  name: "h4ck3rm4n",
  color: "#FFFFFF",
  icon: "https://media.giphy.com/media/26tPnAAJxXTvpLwJy/giphy.gif",
  author: "Xx_hackerman_xX",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (me, enemies, memory) => {
    enemies = enemies.sort((one, two) => (one.health > two.health ? -1 : 1));
    if (enemies.length > 2) {
      let amIUnderAttack = enemies.find((e) => e.lastTarget == me.robotId);
      if (amIUnderAttack != null) {
        return amIUnderAttack.robotId;
      }
      if (me.health > enemies[1].health) {
        return me.robotId;
      } else {
        return undefined;
      }
    } else {
      return enemies[0].robotId;
    }
  },
};

export { h4ck3rm4n };
