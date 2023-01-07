/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'bg-primary': '#2C1E1E',
        'bg-secondary': '#512929',

        'text-primary':'#FFFFFF',
        'text-secondary':'#E28181'

        
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
