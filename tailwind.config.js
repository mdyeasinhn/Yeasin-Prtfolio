/** @type {import('tailwindcss').Config} */

import taliwindScrolbar from 'tailwind-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [taliwindScrolbar],
}