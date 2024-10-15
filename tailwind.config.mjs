/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				customGray: "#E7E7E7",
				customBlack: "#282A36",
			},
		},
	},
	plugins: [],
};
