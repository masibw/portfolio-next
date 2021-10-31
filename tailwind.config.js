module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#006c83',
        secondary: '#6eb4bf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
