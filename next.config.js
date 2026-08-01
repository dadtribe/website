/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export for GitHub Pages (served at the root of a custom domain).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
