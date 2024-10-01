/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;

// next.config.mjs

export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'eu-west-2.graphassets.com',
          port: '', // leave empty for default ports
          pathname: '/**', // allow any path
        },
      ],
    },
  }
  


// next.config.mjs
// import withPlugins from 'next-compose-plugins';
// import withTM from 'next-transpile-modules';

// export default withPlugins([
//   withTM({
//     reactStrictMode: true,
//     async rewrites() {
//       return [
//         {
//           source: '/about',
//           destination: '/about-us',
//         },
//       ];
//     },
//     typescript: {
//       // Warns if there are TypeScript errors during production build
//       ignoreBuildErrors: false,
//     },
//   }),
// ]);
