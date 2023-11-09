const colors = require('tailwindcss/colors')
module.exports = {
  purge: [    
    './src/*.vue',
    './src/views/*.vue',
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      myGreen: '#00FFBC',//'#4BC96A',
      red: '#E82F0C',
      orange: '#FFB001',
      background: '#000025',   
      backgroundLight: '#00694e',//'#00402F',//'#0B1408', 
      white: '#FFFFFF'
    },
    borderWidth: {
      DEFAULT: '0.5px',
    },
    screens: {
      'desktop': {'max': '1514px'},
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
      },
      maxWidth: {
        'logo': '10rem'     
      },
      minWidth: {
        'nav': '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
