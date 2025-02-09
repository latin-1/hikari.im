import { renderFavicon } from "../scripts/favicon";

export const GET = async () => {
  return new Response(renderFavicon("dark"), {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
