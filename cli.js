import { Nand } from "./Nand.js";

const fn = Deno.args[0];
const s = await Deno.readTextFile(fn);
new Nand(s).run();
