/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Gowun Dodum', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      serif: ['Crimson Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Serif KR', 'serif'],
      account: ['Noto Sans Korean', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('@tailwindcss/typography'),
  ],
}
