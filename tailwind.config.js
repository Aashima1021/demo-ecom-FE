/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [/bg-/, /text-/], // Add bg- and text- classes to the safelist
  },
  theme: {
    extend: {},
    colors: {
      lightBlack: "#3C4242",
      darkBlack: "#333333",
      mediumBlack: "#807D7E",
      purpleColor: "#8A33FD",
      darkGray: "#BEBCBD",
      mediumGray: "#F6F6F6",
      lightGray: "#FFFFFF",
      greenColor: "#34A853"

    },
    fontFamily: {
      titleFont: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      'darkblack': '8px 8px 20px rgba(0, 0, 0, 1)',
    },
  },
  plugins: [],
}

