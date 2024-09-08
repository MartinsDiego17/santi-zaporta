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
				'cel' : { 'max' : '768px' },
				'tab' : { 'max' : '1080px' },
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}