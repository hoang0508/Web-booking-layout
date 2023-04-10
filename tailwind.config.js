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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1023.98px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1440px",

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        primary: ["Be Vietnam Pro", "sans-serif;"],
      },
      content: {
        line: 'url("../assets/images/line-v2.svg")',
      },
      backgroundImage: {
        "gradient-blog":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9),#D9D9D9)",
      },
      colors: {
        primary: "#BA9256",
        hover: "#BA9968",
        focus: "#BA9C70",
        active: "#BA9C70",
        "ravi-black-100": "#252525",
        "ravi-black-20": "rgba(37, 37, 37, 0.2)",
        "ravi-bg-f5": "#FFFBF5",
        "ravi-gray-80": "#808080",
        "ravi-gray-55": "#E5E5E5",
        "ravi-gray-f5": "#F5F5F5",
        "ravi-gray-98": "#989898",
        "ravi-gray-ba": "#BABABA",
        "ravi-gray-300": "#B3B3B3",
        "ravi-gray-100": "#E6E6E6",
        "ravi-gray-600": "#666666",
        "ravi-gray-fc": "#FCFCFC",
        "ravi-blue-50": "#E5F2FF",
        "ravi-hover-08": "rgba(186, 146, 86, 0.08)",
        "ravi-focus-12": "rgba(186, 146, 86, 0.12)",
        "ravi-active-12": "rgba(186, 146, 86, 0.12)",
        "ravi-warning-80": "#FF8000",
        "ravi-warning-50": "#FFF2E5",
        "ravi-warning-100": "#FFE5CC",
        "ravi-warning-600": "#CC6600",
        "ravi-success-100": "#D5FAD1",
        "ravi-success-700": "#1A8A0F",
        "ravi-error-32": "#B3261E",
      },
      boxShadow: {
        buttonShadow: `0px 1px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.1)`,
        dropdownShadow: `1px 3px 12px rgba(0, 0, 0, 0.1)`,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
