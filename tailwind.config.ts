import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pangolin: ["pangolin", "sans-serif"],
        patrick: ["patrick", "sans-serif"],
        handlee: ["handlee", "cursive"],
      },
      keyframes: {
        "main-photo": {
          "0%, 100%": {
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          },
          "14%": {
            borderRadius: "40% 60% 54% 46% / 49% 60% 40% 51%",
          },
          "28%": {
            borderRadius: "54% 46% 38% 62% / 49% 70% 30% 51%",
          },
          "42%": {
            borderRadius: "61% 39% 55% 45% / 61% 38% 62% 39%",
          },
          "56%": {
            borderRadius: "61% 39% 67% 33% / 70% 50% 50% 30%",
          },
          "70%": {
            borderRadius: "50% 50% 34% 66% / 56% 68% 32% 44%",
          },
          "84%": {
            borderRadius: "46% 54% 50% 50% / 35% 61% 39% 65%",
          },
        },
      },
      animation: {
        "main-photo": "main-photo 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;