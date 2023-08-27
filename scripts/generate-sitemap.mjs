import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import siteMetadata from "../data/siteMetadata.js";
import { allBlogs } from "../.contentlayer/generated/index.mjs";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  console.log("Prettier Config: ", prettierConfig); // Logging prettier configuration

  const contentPages = allBlogs
    .map((x) => `/${x._raw.flattenedPath}`)
    .filter((x) => !x.draft && !x.canonicalUrl);

  const pages = await globby([
    "pages/*.{js,tsx}",
    "public/tags/**/*.xml",
    "!pages/_*.{js,tsx}",
    "!pages/api",
    "!pages/404.{js,tsx}",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .concat(contentPages)
              .map((page) => {
                const path = page
                  .replace("pages/", "/")
                  .replace("public/", "/")
                  .replace(".js", "")
                  .replace(".mdx", "")
                  .replace(".md", "")
                  .replace("/feed.xml", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  // Write unformatted sitemap to a file for inspection
  writeFileSync("public/sitemap-unformatted.xml", sitemap);

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // Check if the formatted content is a string
  if (typeof formatted !== "string") {
    console.error("Formatted sitemap content is not a string.");
    return;
  }

  writeFileSync("public/sitemap.xml", formatted);
}

generate();
