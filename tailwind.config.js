/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},

		extend: {
			fontFamily: {
				'space-mono': ['Space Mono', 'monospace'],
				'dm-sans': ['DM Sans', 'sans-seriff'],
			},
			animation: {
				'fade-in': 'fadeIn 1000ms ease-out',
				'fade-in-fast': 'fadeIn 500ms ease-out',
				'rise-up': 'riseUp 750ms ease-out',
				'fade-out': 'fadeOut 500ms ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				},
				fadeInBkg: {
					'0%': { opacity: '0%' },
					'60%': { opacity: '60%' },
				},
				riseUp: {
					'0%': { transform: 'translateY(15%)', opacity: '0%' },
					'100%': { transform: 'translateY(0%)', opacity: '100%' },
				},
				fadeOut: {
					'0%': { opacity: '100%' },
					'100%': { opacity: '0%' },
				},
			},
		},
		plugins: [],
	},
};
