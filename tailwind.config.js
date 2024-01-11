/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "main-content": "715px ",
      },

      colors: {
        "sea-blue": "#3F8DA9",
        primary: "#30BCED",
        secondary: "#E78B13",
        dark: "#1A1A1A",
        light: "#FFFAFF",
      },
    },
  },
  plugins: [],
};
