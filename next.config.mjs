/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: '**',
       },
       {
         protocol: 'http',
         hostname: '**',
       },
     ],
   },
   env: {
    API_BASE: "https://dummyjson.com",
   }
};

export default nextConfig;