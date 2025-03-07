/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD43A",
        darkblack: "#111111",
        white2: "#ebebeb",
      },
      fontFamily: {
        silk: ["Silkscreen", "sans-serif"], 
        metropolis: ["Metropolis", "serif"],
        mono: ["Fira Code", "monospace"],
        custom: ["YourCustomFont", "sans-serif"], 
      },
      screens: {
        "max-900": { max: "900px" },
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        move: "move 1.5s ease-in-out infinite",
      },
      boxShadow: {
        "yellow-glow": "0px 0px 20px 0px rgba(255, 187, 52, 0.10)",
      },
    },
  },
  plugins: [],
};
