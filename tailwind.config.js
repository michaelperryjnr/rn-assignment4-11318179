/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFD",
        secondary: {
          DEFAULT: "#F0522F",
          100: "#DC3510",
          200: "#E8D1BA",
        },
        black: {
          DEFAULT: "#000000",
          100: "#1E1E2D",
          200: "#E8D1BA",
        },
        gray: {
          100: "#CDCDE0",
        },
        blue: {
          100: "#356899",
        },
        cardBg1: {
          DEFAULT: "#5386E4",
        },
        cardBg2: {
          DEFAULT: "#04284A",
        },
      },
    },
  },
  plugins: [],
};
