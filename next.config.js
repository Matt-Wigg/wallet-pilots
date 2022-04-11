/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    INFURA_KEY: process.env.NEXT_PUBLIC_INFURA_KEY
  }
}

module.exports = nextConfig
