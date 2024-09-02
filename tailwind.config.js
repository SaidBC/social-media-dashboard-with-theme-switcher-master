/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem'
      },
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-orange": "hsl(37, 97%, 70%)",
        "instagram-pink": "hsl(329, 70%, 58%)",
        "youtube": " hsl(348, 97%, 39%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "dark-blue": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "toggle-light-blue": " hsl(230, 22%, 74%)",
        "toggle-blue": " hsl(210, 78%, 56%)",
        "toggle-lime-green": "hsl(146, 68%, 55%)",
        'heavy-dark-blue': "hsl(228deg 25.55% 26.86%)",
        "heavy-black": 'hsl(232deg 33.33% 91.18%)'
      },
      backgroundImage: ({ theme }) => ({ main: `linear-gradient(${theme('colors.very-pale-blue')} 20rem,white 20rem)` }),
      fontFamily: {
        inter: 'Inter , sans-serif'
      },
      screens: {
        xs: '420px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

