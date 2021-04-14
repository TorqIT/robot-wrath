export interface Robot {
  name: string;
  color: string;
}

export interface RobotCombatant extends Robot {
  id: number;
}

export interface RobotStatus {
  robotId: number;
  health: number;
  power: number;
}
