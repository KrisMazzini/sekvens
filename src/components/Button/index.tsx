import { IconProps } from 'phosphor-react'
import { ComponentProps } from 'react'

import { Container } from './styles'

type ButtonProps = ComponentProps<typeof Container> & {
  label?: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export function Button({ label, icon: Icon, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {Icon && <Icon data-testid="icon" size={20} />}

      {label}
    </Container>
  )
}
