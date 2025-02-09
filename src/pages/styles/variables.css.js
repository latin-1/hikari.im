import { baseColors, colors } from "../../scripts/colors";

const toVariables = ({ prefix, data, mapValue }) => {
  return Object.fromEntries(
    Object.entries(data).map(([name, value]) => [
      `${prefix}-${name}`,
      mapValue ? mapValue(value) : value,
    ]),
  );
};

const variables = {
  ...toVariables({
    prefix: "--base-color",
    data: baseColors,
    mapValue: (color) => color.toString(),
  }),
  ...toVariables({
    prefix: "--color",
    data: colors,
    mapValue: (baseColorNames) =>
      `light-dark(var(--base-color-${baseColorNames.light}), var(--base-color-${baseColorNames.dark}))`,
  }),
};

export const GET = async () => {
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
