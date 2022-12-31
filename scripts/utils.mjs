import fs from "node:fs/promises";
import path from "node:path";

import prettier from "prettier";

const readFile = async (fileName) => {
  return (await fs.readFile(fileName)).toString();
};

const writeFile = async (fileName, content) => {
  await fs.mkdir(path.dirname(fileName), { recursive: true });
  await fs.writeFile(
    fileName,
    prettier.format(content, {
      filepath: fileName,
      ...(await prettier.resolveConfig(fileName)),
    }),
  );
};

export { readFile, writeFile };
