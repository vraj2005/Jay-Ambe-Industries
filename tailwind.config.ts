import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F5F1',
          200: '#EFECE6',
          300: '#E2DDD4',
          400: '#D5CFC3',
        },
        navy: {
          950: '#0B0E17',
          900: '#111622',
          800: '#1A2233',
          700: '#263147',
          600: '#34425E',
        },
        charcoal: {
          900: '#1A1D20',
          800: '#2C3036',
          700: '#3D434C',
          600: '#4A505A',
          400: '#757D8A',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F6F0E4',
          200: '#ECE0C9',
          400: '#C9A35A',
          500: '#B89047',
          600: '#A17B36',
          700: '#856428',
        },
        border: {
          light: '#E5E3DE',
          subtle: '#DDD9D0',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        mega: '.25em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(26, 34, 51, 0.05)',
        'card': '0 10px 30px -4px rgba(26, 34, 51, 0.06)',
        'elevated': '0 20px 40px -10px rgba(17, 22, 34, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
