import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      // Base on Antd
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        alumni: ["var(--font-open)", "sans-serif"],
      },
    },
  },
  important: true,
};

export default config;
