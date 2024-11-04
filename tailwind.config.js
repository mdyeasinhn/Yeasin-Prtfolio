/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

function flattenColorPalette(colors) {
  const result = {};
  for (const [color, value] of Object.entries(colors)) {
    if (typeof value === 'object') {
      for (const [shade, hex] of Object.entries(value)) {
        result[`${color}-${shade}`] = hex;
      }
    } else {
      result[color] = value;
    }
  }
  return result;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [tailwindScrollbar, addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
