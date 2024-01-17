/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#30BCED',
        secondary: '#E78B13',
        darkBlue: '#2E6C8D',
        dark: '#1A1A1A',
        light: '#FFFAFF'
      },
    },
  },
  plugins: [],
}