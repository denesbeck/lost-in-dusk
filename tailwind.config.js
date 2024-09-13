/*eslint no-undef: "off"*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 0.2s ease-out",
        textFocus: "textFocus 0.3s ease-in",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
