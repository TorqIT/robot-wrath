export interface Robot<Memory extends object> {
  name: string;
  color: string;
  icon: string;
  author: string;
  /** Initializes your memory based on your ID and the IDs of all your enemies.
   * Enemies always start with 1000 health and 10 power. Memory only lasts for the current
   * battle.
   */
  init: (you: number, robots: number[]) => Memory;
  /** Decides who your robot wants to attack based on your current status,
   * the status of all **living** enemies, and your memory.
   */
  execute: (
    you: RobotStatus,
    robots: RobotStatus[],
    memory: Memory
  ) => number | undefined;
}

export interface RobotEntrant extends Robot<object> {
  staticId: number;
}

export interface RobotCombatant extends RobotEntrant {
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

export interface VictoryLog {
  robotStaticId?: number;
  wins: number;
}
