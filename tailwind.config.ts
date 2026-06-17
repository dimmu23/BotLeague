import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        panel: "#111111",
        line: "rgba(255,255,255,0.08)",
        red: {
          core: "#FF3B4A",
          soft: "#FF5A5F",
        },
        blue: {
          core: "#2F4BFF",
          glow: "#3A5BFF",
        },
        muted: "#A0A0A0",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        red: "0 0 36px rgba(255, 59, 74, 0.32)",
        blue: "0 0 42px rgba(58, 91, 255, 0.34)",
        card: "0 18px 80px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "radial-red": "radial-gradient(circle at center, rgba(255,59,74,0.34), transparent 62%)",
        "radial-blue": "radial-gradient(circle at center, rgba(58,91,255,0.34), transparent 62%)",
      },
    },
  },
  plugins: [],
};

export default config;
