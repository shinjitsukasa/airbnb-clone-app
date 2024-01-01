/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },

    images: {
        remotePatterns: [
            {
                protocol: "https",
								hostname: "avatars.githubusercontent.com",
                hostname: "lh3.googleusercontent.com",
								pathname: "**",
            }
        ]
    }
}

module.exports = nextConfig
