/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBlack: "#111111",
        colorGray: "#1D1D1D",
      },
      fontSize: {
        secondary: "54px",
      },
    },
  },
  plugins: [],
};
