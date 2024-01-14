/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"res.cloudinary.com"
		]
	}
}

// const nextConfig = {
// 	experimental: {
// 		appDir: true,
// 	},

// 	reactStrictMode: true,
// 	swcMinify: true,
// 	optimizeFonts: true,
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "res.cloudinary.com",
// 				hostname: "avatars.githubusercontent.com",
// 				hostname: "lh3.googleusercontent.com",
// 				pathname: "**",
// 			}
// 		],
// 		minimumCacheTTL: 1500000,
// 	},
// };

module.exports = nextConfig;
