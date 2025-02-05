import GitHubIcon from "../components/social-icons/GitHubIcon.astro";
import SteamIcon from "../components/social-icons/SteamIcon.astro";
import XIcon from "../components/social-icons/XIcon.astro";

export const socials = [
  {
    name: { label: "X", lang: "en" },
    link: { href: "https://x.com/rev__hikari" },
    Icon: XIcon,
  },
  {
    name: { label: "GitHub", lang: "en" },
    link: { href: "https://github.com/latin-1" },
    Icon: GitHubIcon,
  },
  {
    name: { label: "Steam", lang: "en" },
    link: { href: "https://steamcommunity.com/id/latin-1" },
    Icon: SteamIcon,
  },
];
