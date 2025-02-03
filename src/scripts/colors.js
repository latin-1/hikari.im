import Color from "colorjs.io";

export const schema = {
  roles: [
    { name: "primary", hue: 30, saturation: 0.8 },
    { name: "neutral", hue: 30, saturation: 0.2 },
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

export const colors = Object.fromEntries(
  schema.roles.map((role) => [
    role.name,
    Object.fromEntries(
      schema.tones.map((tone) => [
        tone.name,
        new Color({
          space: "okhsl",
          coords: [role.hue, role.saturation, tone.lightness],
        }).toString({
          format: "hex",
        }),
      ]),
    ),
  ]),
);
