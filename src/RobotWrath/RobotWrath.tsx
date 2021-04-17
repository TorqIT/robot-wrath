import React, { useEffect, useMemo, useState } from "react";
import { robots as submittedRobots } from "./robots";
import {
  RobotCombatant,
  RobotEntrant,
  TurnEvent,
  VictoryLog,
} from "./interfaces";
import {
  advance,
  generateCombatants,
  getStatus,
  getVictor,
  simulateGame,
} from "./gameLogic";
import { RobotList, Victor } from "./Components/RobotList";
import { Leaderboard } from "./Components/Leaderboard";
import { WrathButtonPanel } from "./Components/WrathButtonPanel";
import styles from "./robotWrath.module.css";
import { About } from "./About";
import { EventLog } from "./Components/EventLog";

interface IProps {}

const robotEntrants = submittedRobots.map(
  (r, index): RobotEntrant => ({
    ...r,
    staticId: index + 1000, //just to make it obvious
  })
);

const RobotWrath: React.FC<IProps> = ({}) => {
  const [robots, setRobots] = useState<RobotCombatant[]>(
    generateCombatants(robotEntrants)
  );

  const [events, setEvents] = useState<TurnEvent[][]>([]);

  const status = useMemo(() => getStatus(robots, events), [robots, events]);

  const [isRunning, setRunning] = useState(false);

  const [victories, setVictories] = useState<VictoryLog[]>([]);

  useEffect(() => {
    if (status.filter((s) => s.health > 0).length <= 1) {
      setRunning(false);
      return;
    }

    if (isRunning) {
      const timer = setTimeout(performAdvance, 400);
      return () => clearTimeout(timer);
    }
  }, [isRunning, events]);

  const victor = (() => {
    const victorId = getVictor(status);

    if (victorId == -1) {
      return null;
    } else {
      return robots.find((r) => r.id == victorId);
    }
  })();

  //This looks like it shouldn't work in cases where performing full battles
  // resulting in the same victor (rando wins -> rando wins = no change), but
  // it actually DOES still work since the RobotCombatant objects are
  // different between games. That said, this feature will break if any sort
  // of alternate timeline functionality happens (reversing a game and
  // continuing from a midpoint).
  useEffect(() => {
    if (victor === undefined) {
      return;
    }

    //An alternative way to do this would be to store entire previous game
    // sessions in the state, then evaluating at render (probably memoized)
    // how many wins there have been, but then that object is going to get
    // very huge, very fast, and parsing it would really take some time
    // as well
    const nextVictories = addVictoryToLog(victor?.staticId, victories);
    setVictories(nextVictories);
  }, [victor]);

  function addVictoryToLog(staticId: number | undefined, log: VictoryLog[]) {
    const nextVictories = log.map((v) => ({ ...v }));
    const victoryLog = nextVictories.find((v) => v.robotStaticId == staticId);

    if (victoryLog) {
      victoryLog.wins++;
    } else {
      nextVictories.push({ robotStaticId: staticId, wins: 1 });
    }

    return nextVictories;
  }

  function performAdvance() {
    setEvents(events.concat([advance(robots, events)]));
  }

  return (
    <div className={styles.main}>
      <WrathButtonPanel
        onReset={() => {
          setRobots(generateCombatants(robotEntrants));
          setRunning(false);
          setEvents([]);
        }}
        onAdvance={() => {
          performAdvance();
          setRunning(false);
        }}
        onAutoBattle={() => setRunning(!isRunning)}
        onPerformFull={() => {
          if (victor === undefined) {
            setEvents(simulateGame(robots, events).events);
          } else {
            const combatants = generateCombatants(robotEntrants);
            setRobots(combatants);
            setEvents(simulateGame(combatants, []).events);
          }
        }}
        onPerformMany={() => {
          let nextVictories = victories.map((v) => ({ ...v }));

          for (let j = 0; j < 10; j++) {
            const combatants = generateCombatants(robotEntrants);
            const results = simulateGame(combatants, []);
            nextVictories = addVictoryToLog(
              combatants.find((r) => r.id == results.victor)?.staticId,
              nextVictories
            );
          }

          setVictories(nextVictories);
        }}
        hasVictor={victor !== undefined}
        isRunning={isRunning}
      />

      <div style={{ flex: 1, overflow: "hidden", display: "flex" }}>
        <div style={{ height: "100%", marginRight: 30 }}>
          <About />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, overflowY: "hidden" }}>
            <RobotList robots={robots} status={status} />
          </div>

          <Victor robot={victor} />
        </div>
        <div className={styles.sidePanel}>
          <h1 style={{ marginTop: 0 }}>Events</h1>
          <div style={{ flex: 1, overflowY: "hidden" }}>
            <EventLog robots={robots} events={events} />
          </div>
          <h1>Leaderboard</h1>
          <div style={{ flex: 1, overflowY: "hidden" }}>
            <Leaderboard robots={robots} records={victories} />
          </div>
        </div>
      </div>
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
