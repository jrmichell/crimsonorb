import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#990000",
        secondary: "#f56991",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["night", "winter"],
  },
};
