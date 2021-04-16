import { Robot } from "./interfaces";
import { bomb } from "./robots/bomb";
import { ohm } from "./robots/ohm";
import { rando } from "./robots/rando";
import { vengeance } from "./robots/vengeance";

const robots: Robot<any>[] = [rando, ohm, bomb, vengeance];

export { robots };
