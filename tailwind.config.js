/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": "#051125",
        "secondary": "#9D8456",
        "background": "#FBF9F4",
        "surface": "#FBF9F4",
        "surface-container": "#F0EEE9",
        "on-surface": "#051125",
        "on-surface-variant": "#45474d",
        "on-primary": "#ffffff",
        "outline": "#D1C5B8"
      },
      "borderRadius": {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Newsreader", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}
