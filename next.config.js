/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'],
    },
};
const { i18in } = require('./next-i18next.config');

module.exports = {
    ...nextConfig,
    i18in,
};
