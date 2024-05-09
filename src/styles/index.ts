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
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
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
  },
})
