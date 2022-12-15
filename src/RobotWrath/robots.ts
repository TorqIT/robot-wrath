import { Robot } from "./interfaces";
import { bitey } from "./robots/bitey";
import { bomb } from "./robots/bomb";
import { EvansRealBot } from "./robots/evansRealBot";
import { h4ck3rm4n } from "./robots/hackerman";
import { IHATEU } from "./robots/IHATEU";
import { killer } from "./robots/killer";
import { knockYouDown } from "./robots/knockYouDown";
import { ohm } from "./robots/ohm";
import { Pimcore } from "./robots/Pimcore";
import { rando } from "./robots/rando";
import { torqitup } from "./robots/torqitup";
import { tweedleDee } from "./robots/tweedleDee";
import { tweedleDumb } from "./robots/tweedleDumb";
import { vengeance } from "./robots/vengeance";
import { Wazzup } from "./robots/Wazzup";
import { WellWellWell } from "./robots/WellWellWell";

export const robots: Robot<any>[] = [
  rando,
  ohm,
  bomb,
  vengeance,
  knockYouDown,
  bitey,
  tweedleDee,
  tweedleDumb,
  torqitup,
  h4ck3rm4n,
  EvansRealBot,
  killer,
  IHATEU,
  Wazzup,
  WellWellWell,
  Pimcore,
];
