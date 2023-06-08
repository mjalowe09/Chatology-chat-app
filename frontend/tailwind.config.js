/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito']
      },
      colors:{
        'purple': "#5000ca"
      }
    
    },
  },
  plugins: [],
}