import { Robot } from "./interfaces";
import { bomb } from "./robots/bomb";
import { ohm } from "./robots/ohm";
import { rando } from "./robots/rando";

const robots: Robot[] = [rando(), rando(), rando(), ohm, bomb];

export { robots };
