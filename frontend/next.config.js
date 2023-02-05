/** @type {import('next').NextConfig} */
const path = require("path");
const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "<your_website_base_url>",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/",
});

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "public/sass")],
  },
};

module.exports = nextConfig;
