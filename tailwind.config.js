/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#edf2f8',
        secondary: '#313bac',
        black: '#030303',
        lightGray: '#e4e4e4',
        gray: '#6b7688',
        brown: '#46364a',
        white: '#ffffff',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

