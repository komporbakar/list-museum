/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
      'serif': ['Lora', 'serif']
    },
    colors: {
      'font-1': '#fff',
      'font-2': '#222222',
      'pages-1': '#fff',
      'pages-2': '#f1f8ff',
      'cards-1': '#e8f4fe',
      'button-1': '#1d764a',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,

    }
  },
  plugins: [],
}

