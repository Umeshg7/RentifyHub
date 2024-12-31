/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "" : "",
        "blue" : "3D52A0",
        "blue1" : "7091E6",
        "grey" : "8697C4",
        "grey1" : "ADBBDA",
        "pink" : "EDE8F5",
        "red" : "", 
      },
      /*
      fontFamily: {
        "primary" : ['IBM Plex Sans', 'serif']

      }
      */

    },
  },
  plugins: [],
}

