const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const pages = [
  "/",
  "/listings",
  "/about",
  "/details",
  "/contact",
  "/termsandconditions",
];

const sitemap = new SitemapStream({
  hostname: "https://www.esthellproperties.com",
});

pages.forEach((route) => sitemap.write({ url: route }));
sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream("./public/sitemap.xml").end(data)
);
