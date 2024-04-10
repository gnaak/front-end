import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#043dae',
        gray: '#c9c9c9',
        skyblue: '#32c5ff',
        'bg-black': '#111318',
        white: '#f3f3f3',
        'btn-black': '#1f2021',
        red: '#FF2E00',
        darkgray: '#202229',
        pink: '#8B177E',
        green: '#00FFA3',
      },
      fontFamily: {
        sans: ['SpoqaHanSansNeo', 'sans-serif'],
        samlip: ['SDSamliphopangche', 'serif'],
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.625rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.125rem',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '2x': '200%',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
