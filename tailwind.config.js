/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "asil": ["Abyssinica SIL", "serif"],
        "playwrite": ["Playwrite CU", "cursive"],
      },
    },
  },
  plugins: [],
};
