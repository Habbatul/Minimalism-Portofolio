/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    // Some useful comment
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'IBM-Plex-Sans': ['IBM Plex Sans', 'sans-serif']
    },
    screens:{
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '2xl5': '1820px',

        '3xl': '2133px',
    }
  },
}
