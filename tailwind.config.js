/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 25px 40px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        rubik: "'Rubik', serif",
        poppins: "'Poppins', serif",
        josefins: "'Josefin Sans', sans-serif",
        barlow: "'Barlow', sans-serif",
        raleway: "'Raleway', sans-serif",
      },
      colors: {
        regalblue: "#448BF7",
        vividTangerine: "#FF653C",
        internationalOrange: "#f94514",
        activeBlue: "#246DEF",
      },
      screens: {
        sm: "300px",
        em: "600px",
        md: "960px",
        lg: "1440px",
      },
      height: {
        perfect: "82.8vh",
      }
    },
  },
  plugins: [],
}