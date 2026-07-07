import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // green pastel palette (semantic tokens)
        bg: "#E9F1E6",
        surface: "#FFFFFF",
        "surface-2": "#F2F8F0",
        tint: "#D8EAD2",
        "tint-deep": "#C2DEBB",
        accent: "#5E9E73",
        "accent-ink": "#356F4A",
        border: "#D3E5CD",
        ink: "#243027",
        muted: "#5C6C5B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
