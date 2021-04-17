import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

const rando: Robot<{}> = {
  name: "Rando",
  color: "#f33",
  icon: robotIcons.default,
  author: "Nick",
  init: () => ({}),
  execute: (you, robots) => {
    if (Math.random() > 0.2) {
      return robots[Math.floor(Math.random() * robots.length)].robotId;
    }
  },
};

export { rando };
