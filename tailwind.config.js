module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkBg: "#082f49",
        blue: {
          850: "#1e40af",
        },
      },
    },
  },
  plugins: [],
};
