/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  daisyui: {
    themes: [
      "dark",
      {
        violet: {
          "primary": "#3B1E54",
          "secondary": "#9B7EBD",
          "accent": "#D4BEE4",
          "neutral": "#9B7EBD",
          "base-100": "#ffffff",
          "neutral-content": "#FFFFFF",
          "base-300": "#9B7EBD",
          "base-content": "#3B1E54"
        },
      },
    ],
  },
}
