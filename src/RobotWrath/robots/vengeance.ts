import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

interface Memory {
  attackers: { id: number; attacks: number }[];
}

const vengeance: Robot<Memory> = {
  name: "Vengeance",
  color: "#50A",
  icon: robotIcons.robot,
  init: (yourId, robotIds) => {
    return {
      attackers: robotIds.map((r) => ({
        id: r,
        attacks: 0,
      })),
    };
  },
  execute: (you, robots, memory) => {
    const robotsWhoAttackedMe = robots.filter(
      (r) => r.lastTarget == you.robotId
    );
    robotsWhoAttackedMe.forEach(
      (r) => memory.attackers.find((a) => a.id == r.robotId)!.attacks++
    );

    if (memory.attackers.some((r) => r.attacks > 0)) {
      const mostFrequentAttacker = memory.attackers.reduce(
        (primeTarget, current) =>
          current.attacks > primeTarget.attacks ? current : primeTarget
      );
      return mostFrequentAttacker.id;
    }
  },
};

export { vengeance };
