/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hero: "url(/hero.png)",
        hero2: "url(hero2.png)",
        casual: "url(casual.png)",
        formal: "url(formal.png)",
        party: "url(party.png)",
        gym: "url(gym.png)",
      }
    },
  },
  plugins: [],
}

