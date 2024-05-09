import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',

      gray100: '#e1e1e6',
      gray200: '#a9a9b2',
      gray400: '#7c7c8a',
      gray500: '#505059',
      gray600: '#323238',
      gray700: '#29292e',
      gray800: '#202024',
      gray900: '#121214',

      blue100: '#5363df',
      blue300: '#0f28d9',
      blue500: '#0c1ea6',
      blue700: '#061059',

      green100: '#07f083',
      green300: '#04d938',
      green500: '#027333',
      green700: '#1d592c',

      red100: '#df4752',
      red300: '#d90411',
      red500: '#a6030e',
      red700: '#591d21',

      yellow100: '#fff261',
      yellow300: '#ffeb00',
      yellow500: '#cfbd00',
      yellow700: '#807826',
    },

    fonts: {
      heading: '"RocknRoll One", sans-serif',
      body: '"M PLUS Rounded 1c", sans-serif',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
    },

    fontWeights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
    },
  },

  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
})
