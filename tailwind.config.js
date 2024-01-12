/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "very-dark-magenta": "hsl(300, 43%, 22%)",
          "soft-pink": "hsl(333, 80%, 67%)",
        },
        neutral: {
          "dark-grayish-magenta": "hsl(303, 10%, 53%)",
          "light-grayish-magenta": "hsl(300, 24%, 96%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      fontSize: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
