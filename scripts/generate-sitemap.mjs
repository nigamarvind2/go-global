import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { build } from "esbuild";
import { mkdirSync, writeFileSync, unlinkSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrlRaw = process.env.SITE_URL || process.env.VITE_SITE_URL || "https://goglobaledtech.com";
const baseUrl = baseUrlRaw.replace(/\/$/, "");

const entry = path.join(__dirname, "sitemap-data.ts");
const outFile = path.join(__dirname, ".sitemap-data.mjs");

await build({
  entryPoints: [entry],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: outFile,
  sourcemap: false,
  logLevel: "silent",
});

const dataModule = await import(`${pathToFileURL(outFile).href}?t=${Date.now()}`);
unlinkSync(outFile);

const {
  studyAbroadCountries,
  mbbsCountrySlugs,
  mbbsUniversitySlugs,
  courseSlugs,
  serviceSlugs,
} = dataModule;

const today = new Date().toISOString().split("T")[0];
const urls = [];

const addUrl = (loc, { changefreq, priority } = {}) => {
  urls.push({ loc, changefreq, priority, lastmod: today });
};

addUrl(`${baseUrl}/`, { changefreq: "weekly", priority: 1.0 });
addUrl(`${baseUrl}/study-abroad`, { changefreq: "weekly", priority: 0.9 });
addUrl(`${baseUrl}/mbbs-overseas`, { changefreq: "weekly", priority: 0.9 });
addUrl(`${baseUrl}/services`, { changefreq: "monthly", priority: 0.8 });
addUrl(`${baseUrl}/about`, { changefreq: "monthly", priority: 0.6 });
addUrl(`${baseUrl}/contact`, { changefreq: "monthly", priority: 0.6 });
addUrl(`${baseUrl}/privacy`, { changefreq: "yearly", priority: 0.3 });
addUrl(`${baseUrl}/terms`, { changefreq: "yearly", priority: 0.3 });

studyAbroadCountries.forEach((slug) =>
  addUrl(`${baseUrl}/study-abroad/${slug}`, { changefreq: "monthly", priority: 0.7 }),
);

mbbsCountrySlugs.forEach((slug) =>
  addUrl(`${baseUrl}/mbbs-overseas/${slug}`, { changefreq: "monthly", priority: 0.7 }),
);

mbbsUniversitySlugs.forEach(({ country, university }) =>
  addUrl(`${baseUrl}/mbbs-overseas/${country}/${university}`, { changefreq: "monthly", priority: 0.6 }),
);

courseSlugs.forEach((slug) =>
  addUrl(`${baseUrl}/courses/${slug}`, { changefreq: "monthly", priority: 0.6 }),
);

serviceSlugs.forEach((slug) =>
  addUrl(`${baseUrl}/services/${slug}`, { changefreq: "monthly", priority: 0.6 }),
);

const xmlLines = [
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
  "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
  ...urls.map((entry) => {
    const lines = [
      "  <url>",
      `    <loc>${entry.loc}</loc>`,
      `    <lastmod>${entry.lastmod}</lastmod>`,
    ];

    if (entry.changefreq) {
      lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    }

    if (entry.priority !== undefined) {
      lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
    }

    lines.push("  </url>");
    return lines.join("\n");
  }),
  "</urlset>",
];

mkdirSync(path.join(__dirname, "..", "public"), { recursive: true });
writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), `${xmlLines.join("\n")}\n`);

const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
writeFileSync(path.join(__dirname, "..", "public", "robots.txt"), robotsTxt);
