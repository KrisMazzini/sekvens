import { ComponentProps } from 'react'

import { Container } from './styles'

type BoardButtonProps = ComponentProps<typeof Container> & {
  currentStep?: boolean
}

export function BoardButton({
  currentStep = false,
  ...props
}: BoardButtonProps) {
  return <Container data-active={currentStep} {...props} />
}
