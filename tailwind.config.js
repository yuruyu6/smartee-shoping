module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
        'spin-slow': 'flash 1s linear',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
