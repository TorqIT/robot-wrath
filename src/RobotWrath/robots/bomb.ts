import { Robot } from "../interfaces";

const bomb: Robot = {
  name: "BombBot",
  color: "#0b0a1c",
  execute: (you, robots) => {
    if (you.health > 500) {
      return;
    }

    return robots.reduce((lowest, current) =>
      lowest.health < current.health ? lowest : current
    ).robotId;
  },
};

export { bomb };
