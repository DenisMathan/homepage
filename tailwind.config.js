const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      myGreen: '#4BC96A',
      background: '#0D0C0B',   
      backgroundLight: '#0B1408', 
      white: '#FFFFFF'
    },
    borderWidth: {
      DEFAULT: '0.5px',
    },
    screens: {
      'tablet' : {'max': '1110px'},
      'mobile' : {'max': '566px'},
      'slim'   : {'max': '446px'},
      'superslim': {'max': '405px'}   
    },
    extend: {
      lineHeight: {
        '12': '3rem'
      },
      height: {
        '128': '32rem',
        '150': '37.5rem',
        '164': '41rem',
        '180': '45rem'
      },
      width: {
        '128': '32rem',
        '150': '37.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
