import { styled } from '@/styles'

export const Container = styled('button', {
  border: 'none',

  height: '3.5rem',
  minWidth: '3.5rem',

  padding: '$4',
  borderRadius: '$lg',

  display: 'flex',
  gap: '$2',
  justifyContent: 'center',
  alignItems: 'center',

  fontFamily: '$heading',
  cursor: 'pointer',

  '&:hover:not(:disabled)': {
    filter: 'opacity(0.8)',
    transition:
      'filter linear 0.15s, color linear 0.15s, background-color linear 0.15s',
  },

  '&:disabled': {
    filter: 'opacity(0.5)',
    cursor: 'not-allowed',
  },

  variants: {
    type: {
      primary: {
        backgroundColor: '$white',
        color: '$gray900',
      },

      secondary: {
        backgroundColor: '$gray800',
        color: '$white',

        boxShadow: '0 0 0 2px $colors$white inset',
      },

      success: {
        backgroundColor: '$green100',
        color: '$gray900',
      },

      danger: {
        backgroundColor: '$red100',
        color: '$white',
      },

      unstyled: {
        backgroundColor: 'transparent',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    type: 'primary',
  },
})
