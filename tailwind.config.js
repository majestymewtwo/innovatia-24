/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sandy-toes": ["SandyToes", "sans-serif"],
        "sandy-toes-palm": ["SandyToes-Palm", "sans-serif"],
        "sandy-toes-starfish": ["SandyToes-StarFish", "sans-serif"],
        "sandy-toes-umbrella": ["SandyToes-Umbrella", "sans-serif"],
        "sandy-toes-wave": ["SandyToes-Wave", "sans-serif"],
        "beauty-mountain": ["BeautyMountain", "sans-serif"],
        "lost-fish": ["LostFish", "sans-serif"],
      },
      keyframes: {
        wheelspin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wheelspin: "wheelspin 1.4s linear infinite",
      },
    },
  },
  plugins: [],
};
