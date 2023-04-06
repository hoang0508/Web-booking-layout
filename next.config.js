const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["swiperjs.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
