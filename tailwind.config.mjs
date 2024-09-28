const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			screens: {
				'cel': { 'max': '768px' },
				'tablet-md': { 'min': '769px', 'max': '1024px' },
				'tablet-lg': { 'min': '1025px', 'max': '1368px' },
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
