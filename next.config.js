/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/E813FON0wDQ/2400x1600',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/zFSo6bnZJTw/2400x1493',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/16kXp6HKIyo/2400x1600',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/lUaaKCUANVI/2400x1595',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/U4zpPfvogJ4/2688x2096',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/AFB6S2kibuk/2400x1600',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/sEgodrJdMGw',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/505eectW54k',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/OyCl7Y4y0Bk',
      },
      
    ],
  },
};

module.exports = nextConfig;

module.exports = nextConfig
