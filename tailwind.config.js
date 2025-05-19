/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container:{
      center:true,
      padding:"1rem"
    },
    extend: {
      screens:{
        lg:"1124px",
        xl:"1224px"
      },
      fontFamily:{
        'bodyfont': ['Raleway', 'sans-seri'],
        'dancing' : ['Dancing Script', 'cursive'],
        'title' : ['Roboto', 'serif'],
      },
      colors:{
        'primary':'#fcc200',
        'secondary':'#1b1d2f',
      }
    },
  },
  plugins: [],
}

