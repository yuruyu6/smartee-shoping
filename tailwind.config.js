module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
       'layout': '300px minmax(0, 1fr)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
