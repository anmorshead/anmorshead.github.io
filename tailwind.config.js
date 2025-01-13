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
      backgroundImage: {
        'main-bg': "url('/images/brick-wall-texture.jpg')",
        'project-bg': "url('/images/arrows-background.jpg')"
      },
      borderWidth: {
        '8': '12px'
      },
      
    },
  },
  plugins: [],
}

