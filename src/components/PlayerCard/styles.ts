import { styled } from '@/styles'

export const Container = styled('li', {
  '$$primary-color': '$colors$white',
  '$$text-contrast': '$colors$gray900',

  minWidth: '250px',
  maxWidth: '250px',

  boxShadow: '0px 0px 4px 4px $$primary-color',

  padding: '$4',
  borderRadius: '$lg',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  backgroundColor: '$gray900',

  svg: {
    color: '$$primary-color',
  },

  '&[data-playing=true]': {
    backgroundColor: '$$primary-color',
    color: '$$text-contrast',

    svg: {
      color: '$$text-contrast',
    },
  },

  variants: {
    color: {
      blue: {
        '$$primary-color': '$colors$blue100',
        '$$text-contrast': '$colors$white',
      },

      green: {
        '$$primary-color': '$colors$green100',
      },

      red: {
        '$$primary-color': '$colors$red100',
        '$$text-contrast': '$colors$white',
      },

      yellow: {
        '$$primary-color': '$colors$yellow100',
      },
    },
  },
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$2',
})

export const Name = styled('span', {
  textTransform: 'uppercase',
  fontFamily: '$heading',
  fontSize: '$lg',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const Score = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const ScoreValue = styled('span', {
  fontFamily: '$heading',
  fontSize: '$lg',
})
