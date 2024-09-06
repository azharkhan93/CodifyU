/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true } },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['mvp-lit-list-dev.s3.eu-west-2.amazonaws.com', 'res.cloudinary.com'], 
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


