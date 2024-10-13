/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "Red-base": "hsl(14, 86%, 42%)",
        "Green-base": "hsl(159, 69%, 38%)",
        "RoseL-50": "hsl(20, 50%, 98%)",
        "RoseL-100": "hsl(13, 31%, 94%)",
        "RoseL-300": "hsl(14, 25%, 72%)",
        "RoseL-400": "hsl(7, 20%, 60%)",      
        "RoseL-500": "hsl(12, 20%, 44%)",
        "RoseL-900": "hsl(14, 65%, 9%)",
        "RoseL-950": "hsl(14, 85%, 31%)",
      },
      screens:{
        'mobile': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
        'dektop-2': '1720px',
        'dektop-3': '1970px',
        'dektop-4': '2220px',
        'dektop-5': '2470px',

      },
      fontFamily: {
        RedHatText: ['Red Hat Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

