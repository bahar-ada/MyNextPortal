/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers() {
        return [
          {
            source: "/api.vercel.app",
            headers: [
              {
                key: "Access-Control-Allow-Origin",
                value: "*", // Set your origin
              },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET, POST, PUT, DELETE, OPTIONS",
              },
              {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type, Authorization",
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
