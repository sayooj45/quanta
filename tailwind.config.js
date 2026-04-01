/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["MyFont1"],
        font2: ["MyFont2"],
        font3: ["MyFont3"],
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
      },

      colors: {
        primary: "#f70707",
        dark: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
