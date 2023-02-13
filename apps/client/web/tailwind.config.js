/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f6f5fe",
          100: "#edebfe",
          200: "#d1cefb",
          300: "#b5b1f9",
          400: "#7e76f5",
          500: "#473bf0",
          600: "#4035d8",
          700: "#352cb4",
          800: "#2b2390",
          900: "#231d76",
        },
        secondary: {
          50: "#fef4f4",
          100: "#fde8e9",
          200: "#fbc6c8",
          300: "#f8a4a7",
          400: "#f26066",
          500: "#ed1c24",
          600: "#d51920",
          700: "#b2151b",
          800: "#8e1116",
          900: "#740e12",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
