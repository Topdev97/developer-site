/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#db0eb7',
        primaryDark:'#a10d86',
        primaryLight:'#e43bc5',
        secondary:'#848586',
        secondaryLight:'#828485',
        secondaryDark:'#848586',
        tertiary:'#3c5bff',
        tertiaryLight:'#6f85f3',
        tertiaryDark:'#0a014f',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

