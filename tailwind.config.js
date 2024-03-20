/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlack: {
          700: '#3d3e42',
          800: '#34353a',
          900: '#31333b',
        },
        customYellow: {
          500: '#ffc86a',
          600: '#f0bf6c',
        },
        customBrown: {
          300: '#dabe99',
          500: '#76675a',
          700: '#5b5b5c',
        },
        customGreen: {
          300: '#5a7566',
          500: '#5a7b6c',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
