import fs from "node:fs";

const packs = fs.readdirSync("src/data/packs");
const names = [];
for (const f of packs) {
  const s = fs.readFileSync("src/data/packs/" + f, "utf8");
  for (const m of s.matchAll(/^\s+name: "([^"]+)"/gm)) names.push(m[1]);
}
const foley = fs.readFileSync("src/audio/foley.ts", "utf8");
const spring = fs.readFileSync("src/physics/spring.ts", "utf8");
const soundKeys = new Set();
for (const m of foley.matchAll(/^\s{2}(?:"([^"]+)"|([a-z0-9-]+))\(d, t\)/gm)) soundKeys.add(m[1] || m[2]);
const choreoKeys = new Set();
for (const m of spring.matchAll(/^\s{2}(?:"([^"]+)"|([a-z0-9-]+))\(svg\)/gm)) choreoKeys.add(m[1] || m[2]);

console.log("icons", names.length, "sounds", soundKeys.size, "choreo", choreoKeys.size);
console.log("NO SOUND:", names.filter((n) => !soundKeys.has(n)).join(", "));
console.log("---");
console.log("NO CHOREO:", names.filter((n) => !choreoKeys.has(n)).join(", "));
console.log("---");
console.log("EXTRA SOUNDS:", [...soundKeys].filter((n) => !names.includes(n)).join(", "));
console.log("---");
console.log("EXTRA CHOREO:", [...choreoKeys].filter((n) => !names.includes(n)).join(", "));
console.log("---");
console.log("DUP NAMES:", names.filter((n, i) => names.indexOf(n) !== i).join(", "));
