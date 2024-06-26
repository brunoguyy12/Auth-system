/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        fifty: "50px",
        hundred: "100px",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Poetsen: ["Poetsen One", "cursive"],
        Jost: ["Jost", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        attention: {
          "0%": {
            boxShadow: "0 0 0 1px rgba(45, 79, 235,0.85)",
          },
          "90%": {
            boxShadow: "0 0 0 10px rgba(45, 79, 235,0.012)",
          },
          "100%": {
            boxShadow: "0 0 0 10px rgba(45, 79, 235,0.012)",
          },
        },
        rotate:{
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        }
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in",
        attention: "attention 2s ease 0.9s infinite",
        rotate: "rotate 1s ease infinite"
      },
    },
  },

  plugins: [],
};
