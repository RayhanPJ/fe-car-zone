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
    FB_KEY: "AIzaSyBpX3m1iXHQwsP30FTNtDIRx_pLKNIXPxE",
    FB_AUTH_DOMAIN: "topupin-b91ef.firebaseapp.com",
    FB_PROJECT_ID: "topupin-b91ef",
    FB_STORAGE_BUCKET: "topupin-b91ef.appspot.com",
    FB_MESSAGE_SENDER_ID: "943179699686",
    FB_APP_ID: "1:943179699686:web:3f76ffb8377499b522b227",
    FB_MEASUREMENT_ID: "G-D2H75624MY"
   }
};

export default nextConfig;