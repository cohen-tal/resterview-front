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
        theme: "#7743DB",
        light: {
          primary: "bg-white",
          secondary: "#BAE0BD",
        },
        dark: {
          primary: "bg-slate-850",
          secondary: "#202020",
        },
        background: "#F5F5F5",
      },
      maxHeight: {
        "18": "5rem",
      },
      gridTemplateColumns: {
        rep: "repeat(4, 1fr)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
