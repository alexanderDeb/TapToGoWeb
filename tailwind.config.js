/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      blueForm: "#0367A6",
      blueSecond: "#4EB1D9",
      blueSecondHover: "#1D95C6",
      BTN: "#32A65A",
      white: "#ffff",
      BTNHover: "#228A3C",
      slate_50: "#f8fafc",
      slate_100: "#f1f5f9",
      slate_200: "#e2e8f0",
      slate_300: "#cbd5e1",
      slate_400: "#94a3b8",
      slate_500: "#64748b",
      slate_600: "#475569",
      slate_700: "#334155",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
