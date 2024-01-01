/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },

    images: {
        remotePatterns: [
            {
                protocol: "https",
								hostname: "https://avatars.githubusercontent.com/u/",
								pathname: "**",
            }
        ]
    }
}

module.exports = nextConfig
