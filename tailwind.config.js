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
        silk: ["Silkscreen", "sans-serif"], // Example: Replace "Inter" with your desired font
        metropolis: ["Metropolis", "serif"],
        mono: ["Fira Code", "monospace"],
        custom: ["YourCustomFont", "sans-serif"], // Add your custom font here
      },
      screens: {
        "max-900": { max: "900px" },
      },
    },
  },
  plugins: [],
};
