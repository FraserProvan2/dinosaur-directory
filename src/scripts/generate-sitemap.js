const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");
const dinosaurs = require("../data/dinosaurs.json");

const dinosaurUrls = dinosaurs.map((dino) => ({
  url: `/dinosaur/${dino.name.toLowerCase().replace(/\s+/g, "-")}`,
  changefreq: "monthly",
  priority: 0.7,
}));

const staticUrls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/discover", changefreq: "weekly", priority: 0.8 },
  { url: "/a-z", changefreq: "weekly", priority: 0.8 },
  { url: "/quizzes", changefreq: "weekly", priority: 0.8 },
];

const allUrls = [...staticUrls, ...dinosaurUrls];

(async () => {
  try {
    const sitemapPath = path.join(
      __dirname,
      "..",
      "..",
      "build",
      "sitemap.xml"
    );
    const sitemapStream = new SitemapStream({
      hostname: "https://dinosaur.directory",
    });
    const writeStream = createWriteStream(sitemapPath);

    sitemapStream.pipe(writeStream);
    allUrls.forEach((url) => sitemapStream.write(url));
    sitemapStream.end();

    const data = await streamToPromise(sitemapStream);
    console.log(data.toString());
    console.log(`Sitemap generated at ${sitemapPath}`);
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
})();
