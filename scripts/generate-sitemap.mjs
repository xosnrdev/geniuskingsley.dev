import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import siteMetadata from "../data/siteMetadata.js";
import { allBlogs } from "../.contentlayer/generated/index.mjs";

async function generate() {
  try {
    // Fetch prettier configuration
    const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

    // Process blog data
    const contentPages = allBlogs
      .map((x) => `/${x._raw.flattenedPath}`)
      .filter((x) => x && !x.draft && !x.canonicalUrl);

    // Fetch pages
    const pages = await globby([
      "pages/*.{js|tsx}",
      "public/tags/**/*.xml",
      "!pages/_*.{js|tsx}",
      "!pages/api",
      "!pages/404.{js|tsx}",
    ]);

    // Generate sitemap content
    const sitemapContent = `
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

    // Format sitemap content using prettier
    const formatted = prettier.format(sitemapContent, {
      ...prettierConfig,
      parser: "html",
    });

    // Ensure formatted content is a string before writing to a file
    if (typeof formatted !== "string") {
      throw new Error("Formatted sitemap content is not a string.");
    }

    // Write formatted content to file
    writeFileSync("public/sitemap.xml", formatted);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generate();
