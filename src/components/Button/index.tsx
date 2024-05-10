import { IconProps } from 'phosphor-react'
import { Container } from './styles'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Container> & {
  title?: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export function Button({ title, icon: Icon, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {Icon && <Icon data-testid="icon" size={20} />}

      {title}
    </Container>
  )
}
