/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],  
      },
      backgroundImage: {
        'project-bg': "url('/images/arrows-background.jpg')",
        'custom-gradient': 'radial-gradient(at 63% 10%,rgb(26, 1, 42) 0%, transparent 60%), radial-gradient(at 63% 86%,rgb(0, 5, 10) 0%, transparent 50%), radial-gradient(at 35% 36%,rgb(12, 8, 57) 0%, transparent 40%), radial-gradient(at 42% 32%,rgb(3, 28, 42) 0%, transparent 30%)',
        'pink-dots':"url('/images/shapes2.png')",
        'blue-dots':"url('/images/shapes.png')"
      },
      colors: {
        'dark-blue': '#0a0a1a',
      },
      keyframes: {
        dimlight: {
          "0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%": {
            filter: "brightness(30%)",
            boxShadow: "none",
          },
          "18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%": {
            filter: "brightness(100%)",
          },
        },
      },
      animation: {
        dimlight: "dimlight 5s infinite",
      },
    },
  },
  plugins: [],
}
