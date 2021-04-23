import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

const bully: Robot<{}> = {
  name: "Bully",
  color: "#0b0a1c",
  icon: robotIcons.burst,
  author: "Dalton/Logan",
  init: () => ({}),
  execute: (you, robots) => {
    return robots.reduce((lowest, current) =>
      lowest.health < current.health ? lowest : current
    ).robotId;
  },
};

export { bully };
