/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        sweetWhite: `var(--blackBlueLight)`,
        bgCard: `var(--card-bg)`,
        blackBlue: `var(--blackBlueLight)`,
        blackBlueLow: `var(--blackBlueLight-low-opacity)`,
        html: `var(--html)`,
        css: `var(--css)`,
        js: `var(--javascript)`,
        mongoDB: `var(--mongodb)`,
        nodeJS: `var(--nodeJS)`,
        bootstrap: `var(--bootstrap)`,
        tailwind: `var(--tailwind)`,
        tag: `var(--tag)`,
      }
    },
  },
  plugins: [],
}