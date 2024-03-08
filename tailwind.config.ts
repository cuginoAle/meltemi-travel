import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#101c28',
          200: '#20374f',
          300: '#315377',
          400: '#416e9e',
          500: '#518ac6',
          600: '#74a1d1',
          700: '#97b9dd',
          800: '#b9d0e8',
          900: '#dce8f4',
        },
        secondary: {
          100: '#332306',
          200: '#66470c',
          300: '#996a13',
          400: '#cc8e19',
          500: '#ffb11f',
          600: '#ffc14c',
          700: '#ffd079',
          800: '#ffe0a5',
          900: '#ffefd2',
        },
      },
      boxShadow: {
        ale: '0 3px 7px rgba(0, 0, 0, 0.6)',
        logo_small: '0 1px 2px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
