import { styled } from '@/styles'

export const Container = styled('header', {
  padding: '$1 $4',
})

export const Title = styled('h1', {
  color: '$yellow100',
  textShadow: '3px 3px $colors$blue100',

  variants: {
    simple: {
      false: {
        fontSize: '$4xl',
        textAlign: 'center',

        '@bp1': {
          fontSize: '$7xl',
        },
      },

      true: {
        fontSize: '$2xl',

        '@bp1': {
          fontSize: '$4xl',
        },
      },
    },
  },
})

export const Subtitle = styled('h2', {
  color: '$white',
  fontSize: '$xs',
  textAlign: 'center',

  '@bp1': {
    fontSize: '$md',
  },
})
