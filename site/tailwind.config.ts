import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'sans': [ '"Raleway"', ...defaultTheme.fontFamily.sans ]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray100: '#F2F2F2',
        gray200: '#EBEBEB',
        gray300: '#D9D9D9',
        gray400: '#C1C1C1',
        gray1000: '#292D32',
      },
    },
  },
  plugins: [],
};
export default config;
