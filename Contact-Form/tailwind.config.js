/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Green-200-lighter": "hsl(148, 38%, 91%)",
        "Green-600-medium": "hsl(169, 82%, 27%)",
        "Red-Primary": "hsl(0, 66%, 54%)",
        "White-Neutral": "hsl(0, 0%, 100%)",
        "Grey-500-medium": "hsl(186, 15%, 59%)",
        "Grey-900-darker": "hsl(187, 24%, 22%)",
        "Green-hover": "hsl(170, 82%, 13%)",
        "Green-alert": "hsl(184, 23%, 21%)",
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}