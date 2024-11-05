/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./meta.tsx",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				primary: "#00ADB5",
			},
			boxShadow: {},
		},
	},
	plugins: [],
};
