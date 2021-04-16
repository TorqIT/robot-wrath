import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

export function rando(): Robot<{}> {
  return {
    name: "Rando " + Math.floor(Math.random() * 1000),
    color: "#f33",
    icon: robotIcons.robot,
    init: () => ({}),
    execute: (you, robots) => {
      if (Math.random() > 0.2) {
        return robots[Math.floor(Math.random() * robots.length)].robotId;
      }
    },
  };
}
