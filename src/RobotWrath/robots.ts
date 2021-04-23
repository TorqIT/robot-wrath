import { Robot } from "./interfaces";
import { bitey } from "./robots/bitey";
import { bolchevicks } from "./robots/bolchevicks";
import { bomb } from "./robots/bomb";
import { bubly } from "./robots/bubly";
import { bully } from "./robots/bully";
import { death } from "./robots/death";
import { hater } from "./robots/hater";
import { iHateBotOne } from "./robots/iHateBotOne";
import { ironSean } from "./robots/ironSean";
import { ironSeanDefensive } from "./robots/ironSeanDefensive";
import { ironSeanLowestHealth } from "./robots/ironSeanLowestHealth";
import { ironSeanMaxPower } from "./robots/ironSeanMaxPower";
import { ironSeanVengance } from "./robots/ironSeanVengence";
import { knockYouDown } from "./robots/knockYouDown";
import { luke } from "./robots/luke";
import { notEduardosRobot } from "./robots/notEduardosRobot";
import { ohm } from "./robots/ohm";
import { rando } from "./robots/rando";
import { sean } from "./robots/sean";
import { shield } from "./robots/shield";
import { sniper } from "./robots/sniper";
import { snoop } from "./robots/snoop";
import { switzerland } from "./robots/switzerland";
import { vengeance } from "./robots/vengeance";
import { youAintKillinMeSir } from "./robots/youAintKillinMeSir";

export const robots: Robot<any>[] = [
  rando,
  ohm,
  bomb,
  vengeance,
  knockYouDown,
  bitey,
  iHateBotOne,
  snoop,
  bolchevicks,
  hater,
  notEduardosRobot,
  switzerland,
  youAintKillinMeSir,
  luke,
  sean,
  bubly,
  bully,
  death,
  shield,
  sniper,
  ironSean,
  ironSeanDefensive,
  ironSeanLowestHealth,
  ironSeanMaxPower,
  ironSeanVengance,
];
