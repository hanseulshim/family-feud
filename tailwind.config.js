/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ff-dark-blue": "#000080",
        "ff-orange": "#FFA500",
      },
    },
  },
  plugins: [],
};
