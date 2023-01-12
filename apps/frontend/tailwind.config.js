/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary': {
          '50': '#fef6f6',
          '100': '#feeeee',
          '200': '#fbd4d4',
          '300': '#f9bbbb',
          '400': '#f58787',
          '500': '#f05454',
          '600': '#d84c4c',
          '700': '#b43f3f',
          '800': '#903232',
          '900': '#762929'
        },
        'secondary': {
          '50': '#f5f6f7',
          '100': '#eaedef',
          '200': '#cbd1d7',
          '300': '#acb5bf',
          '400': '#6e7e8e',
          '500': '#30475e',
          '600': '#2b4055',
          '700': '#243547',
          '800': '#1d2b38',
          '900': '#18232e'
        }
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ]
}