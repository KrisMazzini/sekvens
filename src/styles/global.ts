import { globalCss, theme } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    color: '$white',
    backgroundColor: '$gray800',
  },

  'body, input, textarea': {
    '-webkit-font-smoothing': 'antialiased',

    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.md,
  },

  'h1, h2, h3, h4, h5, h6, button, a': {
    '-webkit-font-smoothing': 'antialiased',

    fontFamily: theme.fonts.heading,
  },
})
