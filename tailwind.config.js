/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scout: {
          blue: '#0d47a1',
          light: '#e3f2fd',
          dark: '#002171',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
