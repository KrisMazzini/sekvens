import { ComponentProps } from 'react'

import { NextLink } from './styles'

type LinkProps = ComponentProps<typeof NextLink> & {
  label: string
}

export function Link({ label, ...props }: LinkProps) {
  return <NextLink {...props}>{label}</NextLink>
}
