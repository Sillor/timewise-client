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
      },
    },
  },
  plugins: [],
};
