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

  "color-text":
    "light-dark(var(--color-neutral-800), var(--color-neutral-100))",
  "color-text-dim":
    "light-dark(var(--color-neutral-600), var(--color-neutral-300))",
  "color-background":
    "light-dark(var(--color-neutral-10), var(--color-neutral-900))",
  "color-surface":
    "light-dark(var(--color-neutral-50), var(--color-neutral-800))",
  "color-primary":
    "light-dark(var(--color-primary-600), var(--color-primary-300))",
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
