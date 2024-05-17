import { styled } from '@stitches/react'
import Link from 'next/link'

export const NextLink = styled(Link, {
  color: '$white',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
    filter: 'opacity(0.8)',
    transition: 'filter linear 0.15s',
  },
})
