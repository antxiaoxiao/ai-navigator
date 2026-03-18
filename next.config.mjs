/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint is checked locally; skip during Vercel CI build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors are caught locally via tsc --noEmit
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
