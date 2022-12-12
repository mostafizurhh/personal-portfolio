/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#460C68',
          secondary: '#7F167F',
          info: '#6C144D'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
