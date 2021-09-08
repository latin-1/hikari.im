import type { Device } from "../types/Device";

const devices: readonly Device[] = [
  {
    name: "Yoga Slim 7",
    icon: new URL("../assets/icons/laptop.svg", import.meta.url).toString(),
  },
  {
    name: "iPad Air",
    icon: new URL("../assets/icons/tablet.svg", import.meta.url).toString(),
  },
  {
    name: "Pixel 5",
    icon: new URL("../assets/icons/phone.svg", import.meta.url).toString(),
  },
  {
    name: "WH-1000XM4",
    icon: new URL("../assets/icons/headphones.svg", import.meta.url).toString(),
  },
];

export { devices };
