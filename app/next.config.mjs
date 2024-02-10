/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    compress: false,
    distDir: 'static-build',
    trailingSlash: true,
    // async redirects() {
    //     return [{
    //         source: '/test-redirects',
    //         destination: '/',
    //         permanent: true,
    //     }, ]
    // },
    // async rewrites() {
    //     return [{
    //         source: '/test-rewrites',
    //         destination: '/',
    //     }, ]
    // }
}

module.exports = nextConfig
