/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-01": "#1a1919",
        "dark-02": "#474747",
        "dark-03": "#757575",
        "dark-04": "#A3A3A3",
        "li-gr-fr": "#7E90FE",
        "li-gr-to": "#9873FF",
      },
    },
  },
  plugins: [],
};
