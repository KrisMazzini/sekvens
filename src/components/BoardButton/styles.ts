import { styled } from '@/styles'

export const Container = styled('button', {
  '$$gradient-start': '',
  '$$gradient-end': '',

  all: 'unset',
  width: '250px',
  height: '250px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  overflow: 'hidden',

  background: 'radial-gradient(circle, $$gradient-start, $$gradient-end)',
  boxShadow: '0 0 4px 4px $colors$gray900',
  transition: 'filter 0.15s',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:hover:not(:disabled)': {
    filter: 'brightness(1.5)',
  },

  '&:active:not(:disabled)': {
    filter: 'brightness(3)',
  },

  '&[data-active=true]': {
    filter: 'brightness(3)',
  },

  variants: {
    color: {
      blue: {
        '$$gradient-start': '$colors$blue100',
        '$$gradient-end': '$colors$blue700',

        borderBottomLeftRadius: '9999px',
      },

      green: {
        '$$gradient-start': '$colors$green100',
        '$$gradient-end': '$colors$green700',

        borderTopRightRadius: '9999px',
      },

      red: {
        '$$gradient-start': '$colors$red100',
        '$$gradient-end': '$colors$red700',

        borderBottomRightRadius: '9999px',
      },

      yellow: {
        '$$gradient-start': '$colors$yellow100',
        '$$gradient-end': '$colors$yellow700',

        borderTopLeftRadius: '9999px',
      },
    },
  },
})
