/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {



      backgroundImage: (theme) => ({
        'show-1': "url('/sett.jpg')",
         'show-2': "url('/loo.jpg')",
         'show-3':"url('/flossy.jpg')",
        
        
        }),
    


      animation: {
        blob: "blob 16s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(1px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "76%": {
            transform: "translate(20px,20px) scale(2.9)",
          },
          "50%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  
  
  
  
  plugins: [],
}
