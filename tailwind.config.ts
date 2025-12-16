import type { Config } from 'tailwindcss'

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
          DEFAULT: '#004080',
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80bfff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0073e6',
          600: '#005bb3',
          700: '#004080',
          800: '#00264d',
          900: '#000d1a',
        },
        secondary: {
          DEFAULT: '#2ECC71',
          50: '#e8f8f0',
          100: '#c2ebd4',
          200: '#9cdeb8',
          300: '#76d19c',
          400: '#50c480',
          500: '#2ECC71',
          600: '#25a35a',
          700: '#1c7a43',
          800: '#13512c',
          900: '#0a2816',
        },
        accent: {
          DEFAULT: '#FFC300',
          50: '#fff9e6',
          100: '#ffecb3',
          200: '#ffe080',
          300: '#ffd44d',
          400: '#ffc71a',
          500: '#FFC300',
          600: '#cc9c00',
          700: '#997500',
          800: '#664e00',
          900: '#332700',
        },
      },
    },
  },
  plugins: [],
}
export default config
