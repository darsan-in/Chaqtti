/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "top-right",
	},
	output: "standalone",
	distDir: "./out",
	basePath: "",
	assetPrefix: "",
	reactStrictMode: false,
};

module.exports = nextConfig;
