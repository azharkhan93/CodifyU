/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true } },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;



