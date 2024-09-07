/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
