
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
       }
    },
    fontFamily: {
      just : ['Just Me Again Down Here', 'cursive'],
      Roboto_Condensed : ['Roboto Condensed', 'sans-serif'],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class',
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
