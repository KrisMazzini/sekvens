import { styled } from '@/styles'

export const Container = styled('div', {
  flex: 1,
})

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  fontFamily: '$heading',
  fontSize: '$lg',
  color: '$white',
})

export const InputContent = styled('div', {
  padding: '$4',
  borderRadius: '$lg',

  display: 'flex',
  gap: '$2',

  backgroundColor: '$gray900',
})

export const StyledInput = styled('input', {
  all: 'unset',
  display: 'block',
  width: '100%',

  fontSize: '$md',
  color: '$gray100',
  backgroundColor: '$gray900',

  cursor: 'text',

  '&::placeholder': {
    color: '$gray400',
  },
})

export const Error = styled('span', {
  display: 'block',
  marginTop: '$1',

  fontFamily: '$body',
  fontSize: '$md',
  color: '$red100',
})
