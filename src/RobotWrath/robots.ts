import { Robot } from "./interfaces";
import { ohm } from "./robots/ohm";
import { rando } from "./robots/rando";

const robots: Robot[] = [rando(), rando(), rando(), ohm];

export { robots };
