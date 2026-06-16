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
        forest: {
          DEFAULT: '#2E5E3B',
          light: '#3D7A4F',
          dark: '#1E3F28',
        },
        wood: {
          DEFAULT: '#7B4B24',
          light: '#A0622E',
          dark: '#5A3418',
        },
        beige: {
          DEFAULT: '#F5EFE6',
          dark: '#E8DDD0',
        },
        gold: '#D4A853',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'ring-spin': 'ringSpinLeft 12s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ringSpinLeft: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'wood-grain': "url('/images/wood-grain-texture.svg')",
      },
    },
  },
  plugins: [],
}

export default config
