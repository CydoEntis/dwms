/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#F4FAFF",

        "red-30": "#FF5775",
        "red-50": "#E34856",

        "blue-50": "#399EDC",

        "green-50": "#22C17B",
        "green-70": "#17B55B",

        "yellow-50": "#FFA848",

        "grey-50": "#82817F",
        "grey-70": "#5F6163",

        "dark-20": "#35363F",
        "dark-30": "#34353E",
        "dark-40": "#1E1F23",
        "dark-50": "#17181C",

        "black-50": "#252C2E",
      },
    },
  },
  plugins: [],
};
