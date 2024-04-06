/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        domains: [
          "iconscout.com",
        ],
      },
      env: {
        API_URL: process.env.API_URL,
      },
}

module.exports = nextConfig
