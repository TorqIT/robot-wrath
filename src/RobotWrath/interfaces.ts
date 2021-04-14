export interface Robot {
  name: string;
  color: string;
  execute: (you: RobotStatus, robots: RobotStatus[]) => number | undefined;
}

export interface RobotCombatant extends Robot {
  id: number;
}

export interface RobotStatus {
  robotId: number;
  health: number;
  power: number;
  lastTarget?: number;
}

export interface TurnEvent {
  robotId: number;
  target?: number;
}
