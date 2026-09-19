/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        dark: "#171717",
        card: "#202020",
        orange: "#ff9f0a",
        "orange-light": "#ffad21",
        grey: "#999999",
        border: "#2b2b2b",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-7px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-30%)" },
        },
        floatingStar: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(8deg)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "floating-star": "floatingStar 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};