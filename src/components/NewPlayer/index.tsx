import { Trash } from 'phosphor-react'

import { Container } from './styles'

import { Button } from '../Button'
import { Input } from '../Input'

type NewPlayerProps = {
  index: number
  amountOfPlayers: number
}

export function NewPlayer({ index, amountOfPlayers }: NewPlayerProps) {
  return (
    <Container>
      <Input
        label={`Jogador ${index + 1}`}
        placeholder="Digite o nome do jogador"
      />

      {amountOfPlayers > 1 && <Button icon={Trash} type="danger" />}
    </Container>
  )
}
