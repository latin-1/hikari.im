import type { Social } from "../types/Social";

const socials: readonly Social[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/rev__hikari",
    icon: new URL("../assets/icons/twitter.svg", import.meta.url).toString(),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rev_hikari/",
    icon: new URL("../assets/icons/instagram.svg", import.meta.url).toString(),
  },
  {
    name: "Telegram",
    link: "https://t.me/rev_hikari",
    icon: new URL("../assets/icons/telegram.svg", import.meta.url).toString(),
  },
  {
    name: "GitHub",
    link: "https://github.com/latin-1",
    icon: new URL("../assets/icons/github.svg", import.meta.url).toString(),
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/rev_hikari/",
    icon: new URL("../assets/icons/steam.svg", import.meta.url).toString(),
  },
  {
    name: "Email",
    link: "mailto:rev.hikari@gmail.com",
    icon: new URL("../assets/icons/email.svg", import.meta.url).toString(),
  },
];

export { socials };
