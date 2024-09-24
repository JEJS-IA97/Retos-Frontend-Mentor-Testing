/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "Primary-Red": "hsl(0, 100%, 74%)",
        "Primary-Green": "hsl(154, 59%, 51%)",
        "Accent-Blue": "hsl(248, 32%, 49%)",
        "Dark-Blue": "hsl(249, 10%, 26%)",
        "Grayish-Blue": "hsl(246, 25%, 77%)",
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], // Agrega sans-serif como respaldo
      },
    },
  },
  plugins: [],
};
