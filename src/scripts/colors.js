import Color from "colorjs.io";

export const schema = {
  roles: [
    { name: "primary", hue: 0, saturation: 0.8 },
    { name: "neutral", hue: 0, saturation: 0.2 },
  ],
  tones: [
    { name: "10", lightness: 0.99 },
    { name: "50", lightness: 0.95 },
    { name: "100", lightness: 0.9 },
    { name: "200", lightness: 0.8 },
    { name: "300", lightness: 0.7 },
    { name: "400", lightness: 0.6 },
    { name: "500", lightness: 0.5 },
    { name: "600", lightness: 0.4 },
    { name: "700", lightness: 0.3 },
    { name: "800", lightness: 0.2 },
    { name: "900", lightness: 0.1 },
  ],
};

export const baseColors = Object.fromEntries(
  schema.roles.flatMap((role) =>
    schema.tones.map((tone) => [
      `${role.name}-${tone.name}`,
      new Color({
        space: "okhsl",
        coords: [role.hue, role.saturation, tone.lightness],
      }).to("oklch"),
    ]),
  ),
);

export const colors = {
  text: { light: "neutral-800", dark: "neutral-100" },
  "text-dim": { light: "neutral-600", dark: "neutral-300" },
  background: { light: "neutral-10", dark: "neutral-900" },
  surface: { light: "neutral-50", dark: "neutral-800" },
  border: { light: "neutral-400", dark: "neutral-500" },
  primary: { light: "primary-600", dark: "primary-300" },
};
