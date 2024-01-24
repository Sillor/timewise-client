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
      // Add your custom animation here
      animation: {
        slideDown: 'slideDown 2s ease-in-out'
      },
      // Define keyframes for the animation
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}