import { renderFavicon } from "../scripts/favicon";

export const GET = async () => {
  return new Response(renderFavicon("light"), {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
