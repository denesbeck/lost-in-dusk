/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromBottom: {
          "0%": {
            transform: "translateY(2rem)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0rem)",
            opacity: "1",
          },
        },
        textFocus: {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 0.2s ease-out",
        textFocus: "textFocus 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
