/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      OPENAI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY, 
    },
  };
  
  export default nextConfig;
  