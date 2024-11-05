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
				primary: "#5d17eb",
				sec: "#b89af4",
				einner: "#f7f7f7",
				lbg: "#864ef7",
			},
			boxShadow: {},
		},
	},
	plugins: [],
};
