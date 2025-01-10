import { Nand } from "./Nand.js";

const scrs = document.querySelectorAll(`script[type="text/nand"]`);
for (const scr of scrs) {
  const src = scr.textContent;
  const runtime = new Nand(src, (s) => {
    alert(s);
  });
  runtime.run();
}
