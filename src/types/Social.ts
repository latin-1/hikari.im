import type { ComponentType } from "react";

type Social = {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  link: string;
};

export type { Social };
