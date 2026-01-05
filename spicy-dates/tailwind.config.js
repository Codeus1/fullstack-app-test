module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0616",
          800: "#130a23",
          700: "#1a0f2e"
        },
        neon: {
          pink: "#ff4dff",
          purple: "#9b5cff",
          blue: "#4dd5ff",
          green: "#44ff99"
        }
      },
      boxShadow: {
        neon: "0 0 12px rgba(255, 77, 255, 0.5)",
        glow: "0 0 24px rgba(77, 213, 255, 0.35)"
      }
    }
  },
  plugins: []
};
