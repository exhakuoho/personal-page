/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090F',
          900: '#0B0E17',
          850: '#10141F',
          800: '#151A28',
          700: '#1E2436',
        },
        mist: {
          50: '#F7F8FB',
          100: '#EEF0F6',
          200: '#DDE1EC',
        },
        elec: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        volt: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Noto Sans TC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Noto Sans TC"', 'monospace'],
      },
    },
  },
  plugins: [],
};
