/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '1.25rem'
    },
    screens: {
      's': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tablet': [
        {'min': '360px', 'max': '1024px'},
      ],
      'small':[
        {'min': '360px', 'max': '640px'}
      ]
    },
    colors: {
      //dark
      'regal-dark': '#2b2a2A',
      'main-dark': '#141516',
      'black': '#000',
      //light
      'white': '#fff',
      'light-grey': '#ced4e2',
      'grey': '#f9fafb',
      'purple': '#6f42c1',
      
      'blue': '#007bff',
      'light-blue': '#00D8FF',
      'pink': '#CF649A',
      '2xblue': '#06b6d4'
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    fontFamily:{
      test: {
        'flower': ['Indie Flower'],
      }
    }
  },
}
