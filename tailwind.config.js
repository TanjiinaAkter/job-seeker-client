/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
// font-family: "Montserrat", sans-serif;