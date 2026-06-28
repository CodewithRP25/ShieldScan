/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        shield: {
          ink: "#070B12",
          midnight: "#09111F",
          panel: "#0D1420",
          line: "#263244",
          blue: "#2563EB",
          cyan: "#22D3EE",
          green: "#34D399",
          rose: "#FB7185",
          amber: "#FBBF24"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.36)",
        neon: "0 0 28px rgba(34, 211, 238, 0.35)"
      }
    }
  },
  plugins: []
};
