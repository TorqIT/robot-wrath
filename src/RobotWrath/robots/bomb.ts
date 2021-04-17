import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

const bomb: Robot<{}> = {
  name: "Bomb Bot",
  color: "#0b0a1c",
  icon: robotIcons.robot,
  author: "Nick",
  init: () => ({}),
  execute: (you, robots) => {
    if (you.health > 400) {
      return;
    }

    return robots.reduce((lowest, current) =>
      lowest.health < current.health ? lowest : current
    ).robotId;
  },
};

export { bomb };
