import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "src", "data", "packs");
const wanted = new Set(process.argv.slice(2));
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));

for (const file of files) {
  const text = readFileSync(join(dir, file), "utf8");
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s{4}name: "([^"]+)",/);
    if (!m || !wanted.has(m[1])) continue;
    let depth = 0;
    let started = false;
    let end = i;
    for (let j = i; j < lines.length; j++) {
      for (const ch of lines[j]) {
        if (ch === "{") {
          depth++;
          started = true;
        } else if (ch === "}") depth--;
      }
      if (started && depth <= 0) {
        end = j;
        break;
      }
    }
    console.log(`\n===== ${file}:${i + 1}-${end + 1} =====`);
    console.log(lines.slice(i, end + 1).join("\n"));
    i = end;
  }
}
