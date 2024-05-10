import Link from 'next/link'
import { styled } from '@stitches/react'

export const NextLink = styled(Link, {
  color: '$white',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
    filter: 'opacity(0.8)',
    transition: 'filter linear 0.15s',
  },
})
