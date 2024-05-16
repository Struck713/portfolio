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
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#BCAA99',
        secondary: '#88665D',
        sage: '#C2B97F',
        cream: '#F2F7F2',
        magenta: '#8E5572'
      }
    }
  },
  plugins: [],
};
export default config;
