/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'stick-no-bills': ['"Stick No Bills"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

