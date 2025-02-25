import { baseColors, colors } from "./colors";

export const renderFavicon = (colorScheme) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">${[
    `<rect fill="${baseColors[colors.background[colorScheme]].toString({ format: "hex" })}" width="16" height="16" rx="2" />`,
    `<path fill="${baseColors[colors.primary[colorScheme]].toString({ format: "hex" })}" d="M6 2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H6v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h3.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H6V2.5Z" />`,
  ].join("")}</svg>`;
};
