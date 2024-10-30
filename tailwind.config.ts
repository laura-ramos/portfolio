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
  ],
  daisyui: {
    themes: [
      "dark",
      {
        violet: {
          "primary": "#3B1E54",
          "secondary": "#D4BEE4",
          "accent": "#9B7EBD",
          "neutral": "#EEEEEE",
          "base-100": "#EEEEEE",
          "info": "#EEEEEE", 
          "success": "#9B7EBD",  
          "warning": "#9B7EBD",
          "error": "#ff0000",
          "primary-content": "#d4cedb",
        },
      },
    ],
  },
}
