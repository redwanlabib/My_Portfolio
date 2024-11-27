// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-vertical': 'moveVertical 5s ease-in-out infinite',
        'move-horizontal': 'moveHorizontal 5s ease-in-out infinite',
        'button-move': 'buttonMove 5s ease-in-out infinite',
      },
      keyframes: {
        moveVertical: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' },
          '100%': { transform: 'translateX(0)' },
        },
        buttonMove: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'custom': '0px 0px 5px 0px #F9C873',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
