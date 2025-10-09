/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['"Lora"', 'serif'],
        vibes: ['"Great Vibes"'],
        highSpirited: ['"High Spirited"', 'cursive'],
        snellRoundhand: ['"Snell Roundhand"', 'cursive'],
        ergisa: ['"Ergisa-Regular"'],
        cursive: ['cursive'],
        math: ['math'],
      },
      colors: {
          textDefault: 'rgb(146, 131, 98)'
      },
    }
  },
  plugins: [],
}

