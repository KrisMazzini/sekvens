import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '225px',
  height: '225px',
  padding: '$4',
  borderRadius: '50%',
  overflow: 'hidden',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray800',

  '> svg': {
    height: 'inherit',
    width: 'inherit',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    transform: 'rotate(-90deg)',
  },
})

export const Timer = styled('div', {
  width: '100%',
  height: '100%',

  borderTopLeftRadius: '9999px',
  borderTopRightRadius: '9999px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '$sm',
  background: '$gray900',

  span: {
    fontFamily: '$heading',
    fontSize: '$lg',
  },
})

export const PlayPauseButton = styled('button', {
  all: 'unset',
  height: '100%',

  borderBottomLeftRadius: '9999px',
  borderBottomRightRadius: '9999px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  fontFamily: '$heading',
  fontSize: '$lg',
  backgroundColor: '$white',
  color: '$gray900',

  cursor: 'pointer',
  filter: 'brightness(0.8)',

  '&:hover:not(:disabled)': {
    filter: 'brightness(1)',
    transition:
      'filter linear 0.15s, color linear 0.15s, background-color linear 0.15s',
  },

  '&:disabled': {
    filter: 'brightness(0.5)',
    cursor: 'not-allowed',
  },
})

export const Actions = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
  gap: '$4',
})
