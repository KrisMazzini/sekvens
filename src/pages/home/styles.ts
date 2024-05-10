import { styled } from '@/styles'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto auto',
  minHeight: '100vh',
})

export const Content = styled('section', {
  maxWidth: '360px',
  margin: '$8 auto',
  padding: '0 $4',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '$4',

  '@bp1': {
    width: '100%',
    maxWidth: '480px',
  },
})

export const Players = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '$4',
})

export const Nav = styled('nav', {
  margin: '$8 $4',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
  },

  li: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
  },
})
