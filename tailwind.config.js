/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cafe24: ['Cafe24Lovingu'],
        myy: ['MYYeongnamnu'],
        pcp: ['PyeongChangPeace-Bold'],
      },
    },
  },
  plugins: [],
}