import { EmailIcon, GitHubIcon, TwitterIcon } from "../components/Icons";
import type { Social } from "../types/Social";

const socials: readonly Social[] = [
  {
    id: "twitter",
    name: "Twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/rev__hikari",
  },
  {
    id: "github",
    name: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/rehikari",
  },
  {
    id: "email",
    name: "Email",
    icon: EmailIcon,
    link: "mailto:rev.hikari@gmail.com",
  },
];

export { socials };
