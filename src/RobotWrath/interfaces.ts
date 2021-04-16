export interface Robot<Memory extends object> {
  name: string;
  color: string;
  icon: string;
  init: (you: number, robots: number[]) => Memory;
  execute: (
    you: RobotStatus,
    robots: RobotStatus[],
    memory: Memory
  ) => number | undefined;
}

export interface RobotCombatant extends Robot<any> {
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
  resultingMemory: any;
  executionTime: number;
}

export interface MemoryMap {
  [robotId: number]: any;
}
