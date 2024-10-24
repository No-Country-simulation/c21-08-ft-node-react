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
        h1: { fontSize: "2.5rem" },
        h2: { fontSize: "2.5rem" },
        h3: { fontSize: "1.5rem" },
      })
    },
  ],
}
export default config
