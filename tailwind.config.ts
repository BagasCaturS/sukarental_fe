import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
				'custom-palette-orange': '#ffa31a',
				'custom-palette-brown': '#ac8a67',
				'custom-palette-cream': '#fff7ec',
				'custom-palette-gray': '#dfe0df',
			},
    },
  },
  plugins: [
    require('daisyui'),
  


  ],
} satisfies Config