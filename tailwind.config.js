/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  //allows me use the dark variant when the 'dark' class is present in the html tree
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        basebtn: '#e7e5e3',
      },
    },
  },
  plugins: [],
}