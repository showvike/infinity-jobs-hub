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
        "dark-04": "#a3a3a3",
        "dark-06": "#e8e8e8",
        "dark-07": "#f4f4f4",
        "li-gr-fr": "#7e90fe",
        "li-gr-to": "#9873ff",
      },
    },
  },
  plugins: [],
};
