#!/usr/bin/env node

import { readFile, writeFile } from "@neetly/codegen-utils";
import { Color } from "koloro";

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
  "./src/styles/palette.scss",
  colors.map(({ id, color }) => `$${id}: ${color};\n`).join(""),
);
