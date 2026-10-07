import type { APIRoute } from "astro";
import dedent from "ts-dedent";

export const GET: APIRoute = ({ site }) => {
  return new Response(dedent`
    User-agent: *
    Allow: /

    Sitemap: ${new URL("sitemap-index.xml", site)}
  `);
};
