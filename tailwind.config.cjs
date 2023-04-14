/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
					  'roboto': '"Roboto", sans-serif',
					  'baloo': "'Baloo 2', cursive"
					},
					fontSize: {
						'xs': '.75rem',
					},
					colors: {
						brown: '#65011b',
						success: '#5dba3b',
						'light-red': '#ff5157',
						orange: '#ff8b00',
						purple: '#5255c5',
						navy: '#03132a',
					},
		},
	},
	plugins: [],
}
