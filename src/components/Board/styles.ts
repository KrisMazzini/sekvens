import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: '250px 250px',
  justifyContent: 'center',
  gap: '$4',
})
