import { Robot } from "../interfaces";

export function rando(): Robot {
  return {
    name: "Rando " + Math.floor(Math.random() * 1000),
    color: "#f33",
    execute: (you, robots) => {
      const target = robots[Math.floor(Math.random() * robots.length)].robotId;

      console.log("I'm attacking ", target);

      return target;
    },
  };
}
