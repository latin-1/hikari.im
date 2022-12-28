#!/usr/bin/env node

import { Color } from "koloro";

import { readFile, writeFile } from "./utils.mjs";

const schema = JSON.parse(await readFile("./data/palette/schema.json"));

const colors = [];
for (const role of schema.roles) {
  for (const tone of schema.tones) {
    colors.push({
      id: `${role.id}--${tone.id}`,
      color: new Color("koloro-lch", [
        tone.lightness,
        role.chroma,
        role.hue,
      ]).toHex(),
    });
  }
}

await writeFile("./data/palette/palette.json", JSON.stringify({ colors }));

await writeFile(
  "./src/palette/index.js",
  "const palette = {\n" +
    colors.map(({ id, color }) => `  "${id}": "${color}",\n`).join("") +
    "};\n\n" +
    "export { palette };\n",
);

await writeFile(
  "./src/palette/index.scss",
  colors.map(({ id, color }) => `$${id}: ${color};\n`).join(""),
);
