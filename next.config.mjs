/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui-avatars.com',
                port: '',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'lienquan.garena.vn',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/widget-avatars/**',
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/juniper-nexus',
                basePath: false,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
