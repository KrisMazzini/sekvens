import Image from 'next/image'
import { ComponentProps } from 'react'

import { Character } from '@/utils/characters'

import { Container } from './styles'

type BoardButtonProps = ComponentProps<typeof Container> & {
  currentStep?: boolean
  character: Character
}

export function BoardButton({
  currentStep = false,
  character,
  ...props
}: BoardButtonProps) {
  return (
    <Container data-active={currentStep} {...props}>
      <Image
        src={character.image}
        alt={character.name}
        height={300}
        style={{ background: 'transparent', filter: 'opacity(0.75)' }}
      />
    </Container>
  )
}
