/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Be Vietnam Pro", "sans-serif;"],
      },
      colors: {
        primary: "#BA9256",
        hover: "#BA9968",
        focus: "#BA9C70",
        active: "#BA9C70",
        "ravi-black-100": "#252525",
        text80: "#808080",
        "ravi-gray-55": "#E5E5E5",
        "ravi-gray-98": "#989898",
        warning: "#FF8000",
      },
      boxShadow: {
        buttonShadow: `0px 1px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.1)`,
      },
    },
  },
  plugins: [],
};
