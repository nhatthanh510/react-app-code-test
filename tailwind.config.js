/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      white: '#fff',
      blue: '#2081E2',
      main: '#ff3f8b',
      second: '#F58258',
      'blue-hover': '#2563eb',
      'black-1': '#000',
      'black-2': '#434343',
      'gray-1': '#e5e8eb',
      'gray-1-alpha-100': '#434343aa',
      'gray-2': '#A197AA',
      'gray-3': '#f6f6f6',
      'gray-4': '#ebe9e9',
      'gray-5': '#e8ebee',
      'gray-6': '#cecece',
      'gray-7': '#f6f6f6',
      'green-1': '#34e3a1',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
};
