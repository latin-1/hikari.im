import { colors, schema } from "../../scripts/colors";

const variables = {
  ...Object.fromEntries(
    schema.roles.flatMap((role) =>
      schema.tones.map((tone) => [
        `color-${role.name}-${tone.name}`,
        colors[role.name][tone.name],
      ]),
    ),
  ),
};

export const GET = () => {
  return new Response(
    `:root{${Object.entries(variables)
      .map(([name, value]) => `--${name}:${value};`)
      .join("")}}`,
    {
      headers: {
        "Content-Type": "text/css",
      },
    },
  );
};
