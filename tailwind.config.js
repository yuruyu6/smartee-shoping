const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      weight: {
        cardphoto: '257px',
      },
      height: {
        cardphoto: '257px',
      },
      keyframes: {
        flash: {
          'from, 50%, to': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      gridTemplateColumns: {
        layout: '300px minmax(0, 1fr)',
      },
      animation: {
        'fade-in': 'fadeIn 0.1s linear',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['odd'],
      borderColor: ['checked'],
      borderWidth: ['focus'],
      borderRadius: ['focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
