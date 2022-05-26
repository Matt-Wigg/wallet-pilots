/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "img.seadn.io",
      "openseauserdata.com",
      "generator.artblocks.io",
      "s3.amazonaws.com",
      "dystopunksvx.com",
      "nodesnft.com",
    ],
  },
};

module.exports = nextConfig;
