import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import { PluginAPI } from "tailwindcss/types/config"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "450px" },
      // => @media (max-width: 450px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray100: "#F2F2F2",
        gray200: "#EBEBEB",
        gray300: "#D9D9D9",
        gray400: "#C1C1C1",
        gray1000: "#292D32",
        krOrange: "#FC7C48",
        krRed: "#E65046",
        krBlue: "#2557B2",
        krGreen: "#49946A",
      },
      backgroundImage: {
        hero: "url('/images/hero-final1.jpg')",
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addBase } = api
      addBase({
        h1: {
          fontSize: "2.25rem",
          [`@screen md`]: { fontSize: "2rem" },
          [`@screen lg`]: { fontSize: "2rem" },
        },
        h2: {
          fontSize: "2.25rem",
          [`@screen md`]: { fontSize: "2rem" },
          [`@screen lg`]: { fontSize: "2rem" },
          [`@screen xs`]: { fontSize: "1.6rem" },
        },
        h3: { fontSize: "1.5rem" },
        ".categoryCard": {
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderColor: "#292D32",
          borderStyle: "solid",
          [`@screen sm`]: {
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "0px",
            borderColor: "#292D32",
            borderStyle: "solid",
          },
        },
      })
    },
  ],
}
export default config
