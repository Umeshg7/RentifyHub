/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#3D52A0", // Provide hex code for blue
        "blue1": "#7091E6", // Provide hex code for blue1
        "grey": "#8697C4", // Provide hex code for grey
        "grey1": "#ADBBDA", // Provide hex code for grey1
        "pink": "#EDE8F5", // Your pink color is good
        "red": "#FF0000", // Provide hex code for red (example red color)
      },
      fontFamily: {
        "primary": ['IBM Plex Sans', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
