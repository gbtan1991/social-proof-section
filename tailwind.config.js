/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Primary
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",

        //Neutral
        darkGrayishMagenta: "hsl(303, 10%, 53%)",
        lightGrayishMagenta: "hsl(300, 24%, 96%)",
      },

      fontFamily: {
        theme: ['"League Spartan"', 'san-serif']
      },

      backgroundImage: {
        'pattern-top-mobile' : 'url("./assets/images/bg-pattern-top-mobile.svg")',
        'pattern-bottom-mobile' : 'url("./assets/images/bg-pattern-bottom-mobile.svg")',
        'pattern-top-desktop' : 'url("./assets/images/bg-pattern-top-desktop.svg")',
        'pattern-bottom-desktop' : 'url("./assets/images/bg-pattern-bottom-desktop.svg")',
      },

      screens: {
        xs: "480px",
      }
      
    },
  },
  plugins: [],
}