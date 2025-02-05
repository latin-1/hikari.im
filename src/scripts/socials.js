import BlueksyIcon from "../components/social-icons/BlueskyIcon.astro";
import GitHubIcon from "../components/social-icons/GitHubIcon.astro";
import SteamIcon from "../components/social-icons/SteamIcon.astro";
import XIcon from "../components/social-icons/XIcon.astro";

export const socials = [
  {
    name: { label: "X", lang: "en" },
    link: { href: "https://x.com/rev__hikari" },
    icon: { Component: XIcon },
  },
  {
    name: { label: "Bluesky", lang: "en" },
    link: { href: "https://bsky.app/profile/hikari.im" },
    icon: { Component: BlueksyIcon },
  },
  {
    name: { label: "GitHub", lang: "en" },
    link: { href: "https://github.com/latin-1" },
    icon: { Component: GitHubIcon },
  },
  {
    name: { label: "Steam", lang: "en" },
    link: { href: "https://steamcommunity.com/id/latin-1" },
    icon: { Component: SteamIcon },
  },
];
