import { light } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#85A797",
          secondary: "#ECB3A4",
          gray: "#2d2e2f",
        },
        dark: {
          primary: "#4c695b",
          beige: "#cbc6c0",
        },

        cambridge_blue: {
          DEFAULT: "#85A797",
          100: "#19231e",
          200: "#33463d",
          300: "#4c695b",
          400: "#658c7a",
          500: "#85a797",
          600: "#9eb9ac",
          700: "#b6cac1",
          800: "#cedcd6",
          900: "#e7edea",
        },
        floral_white: {
          DEFAULT: "#FAF7ED",
          100: "#4c3f15",
          200: "#987e2a",
          300: "#d0b353",
          400: "#e5d49f",
          500: "#faf7ed",
          600: "#fbf8ef",
          700: "#fcfaf3",
          800: "#fdfbf7",
          900: "#fefdfb",
        },
        walnut_brown: {
          DEFAULT: "#60573E",
          100: "#13110c",
          200: "#272319",
          300: "#3a3425",
          400: "#4d4631",
          500: "#60573e",
          600: "#8b7e59",
          700: "#ada07e",
          800: "#c8c0a9",
          900: "#e4dfd4",
        },
        melon: {
          DEFAULT: "#ECB3A4",
          100: "#42180e",
          200: "#83311c",
          300: "#c5492a",
          400: "#dd7a61",
          500: "#ecb3a4",
          600: "#efc1b5",
          700: "#f3d0c7",
          800: "#f7e0da",
          900: "#fbefec",
        },
        dim_gray: {
          DEFAULT: "#6E6962",
          100: "#161514",
          200: "#2c2a27",
          300: "#423f3b",
          400: "#59544f",
          500: "#6e6962",
          600: "#8e887f",
          700: "#aaa69f",
          800: "#c6c3bf",
          900: "#e3e1df",
        },
        jet: {
          DEFAULT: "#302A23",
          100: "#090807",
          200: "#13100e",
          300: "#1c1915",
          400: "#26211b",
          500: "#302a23",
          600: "#615546",
          700: "#93806a",
          800: "#b7aa9c",
          900: "#dbd5cd",
        },
        topLeft: "rgb(234 243 231)",
        topRight: "rgb(254 255 244)",
        bottomLeft: "rgb(234 240 231)",
        bottomRight: "rgb(249 253 240)",
      },
      maxHeight: {
        "18": "4.5rem",
      },
      maxWidth: {
        "18": "4.5rem",
      },
      minHeight: {
        "18": "4.5rem",
      },
      minWidth: {
        "18": "4.5rem",
      },
      gridTemplateColumns: {
        rep: "repeat(4, 1fr)",
      },
    },
    fontFamily: {
      "sedan-sc": ["Sedan SC", "serif"],
      "poltawoski-nowy": ["var(--font-poltawoski-nowy)"],
      "roboto-mono": ["var(--font-roboto-mono)"],
      anton: ["var(--font-anton)"],
      roboto: ["var(--font-roboto)"],
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
