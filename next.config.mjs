/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  output: 'export', // Enables static export for GitHub Pages
  // Optional: Add basePath if your site is hosted under a subpath on GitHub Pages
  // basePath: '/your-repo-name',
}

export default nextConfig;
