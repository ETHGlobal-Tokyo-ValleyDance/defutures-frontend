/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff0f3",
          100: "#ffe2e9",
          200: "#ffcad8",
          300: "#ff9fb7",
          400: "#ff6992",
          500: "#ff3471",
          600: "#ee1762",
          700: "#c80850",
          800: "#a70a49",
          900: "#8f0c45",
          950: "#500121",
        },
      },
    },
  },
  plugins: [],
};
