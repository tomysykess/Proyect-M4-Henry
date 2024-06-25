/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "http2.mistatic.com",
      },
      { hostname: "cdn-icons-png.flaticon.com" },
      { hostname: "images.pexels.com" },
      { hostname: "www.apple.com" },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
