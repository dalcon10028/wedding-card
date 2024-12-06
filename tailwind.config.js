/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Gowun Dodum', 'system-ui', 'sans-serif'],
      serif: ['Crimson Pro', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('@tailwindcss/typography'),
  ],
}
