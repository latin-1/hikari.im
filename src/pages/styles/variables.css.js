import { baseColors, colors } from "../../scripts/colors.js";

const withPrefix = (prefix, variables) => {
  return Object.fromEntries(
    Object.entries(variables).map(([name, value]) => [
      `${prefix}-${name}`,
      value,
    ]),
  );
};

const variables = {
  ...withPrefix("--base-color", baseColors),
  ...withPrefix(
    "--color",
    Object.fromEntries(
      Object.entries(colors).map(([name, baseColorNames]) => [
        name,
        `light-dark(var(--base-color-${baseColorNames.light}), var(--base-color-${baseColorNames.dark}))`,
      ]),
    ),
  ),
};

export const GET = () => {
  return new Response(
    `:root{ ${Object.entries(variables)
      .map(([name, value]) => `${name}: ${value};`)
      .join(" ")} }`,
    {
      headers: {
        "Content-Type": "text/css",
      },
    },
  );
};
