import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {}

const Wazzup: Robot<Memory> = {
  name: "Don't Make Fun Of My Name",
  color: "#f1c232",
  hue: 100,
  icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fea0894f2-66cb-4be3-9e42-1d51790b4bbf&f=1&nofb=1",
  author: "Evan",
  init: (yourId, enemyIds) => {
    return {};
  },
  execute: (you, enemies, memory) => {
    let reallyWeaklings = enemies.filter(
      (e) => e.power < you.power && e.health < you.power
    );
    if (reallyWeaklings.length > 0) {
      return reallyWeaklings[0].robotId;
    }
    let kindaWeaklings = enemies.filter(
      (e) => e.power < you.power || e.health < you.power
    );
    if (kindaWeaklings.length > 0) {
      return kindaWeaklings[0].robotId;
    }
    return undefined;
  },
};

export { Wazzup };
