/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A6A6A6',
          300: '#474259',
          500: '#272340',
          900: '#171526',
        },
        highlights: {
          300: '#72F285',
          600: '#03A64A',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
