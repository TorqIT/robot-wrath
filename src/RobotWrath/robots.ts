import { Robot } from "./interfaces";
import { bomb } from "./robots/bomb";
import { knockYouDown } from "./robots/knockYouDown";
import { ohm } from "./robots/ohm";
import { rando } from "./robots/rando";
import { vengeance } from "./robots/vengeance";

export const robots: Robot<any>[] = [rando, ohm, bomb, vengeance, knockYouDown];
