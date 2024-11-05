/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "top-right",
	},
	output: "export",
	distDir: "./out",
	basePath: "",
	assetPrefix: "",
};

module.exports = nextConfig;
