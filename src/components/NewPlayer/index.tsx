import { Trash } from 'phosphor-react'

import { Container } from './styles'

import { Button } from '../Button'
import { Input } from '../Input'

export type Player = {
  name: string
  id: string
}

type NewPlayerProps = {
  index: number
  player: Player
  amountOfPlayers: number
  onRemovePlayer: (id: string) => void
}

export function NewPlayer({
  index,
  player,
  amountOfPlayers,
  onRemovePlayer,
}: NewPlayerProps) {
  return (
    <Container>
      <Input
        label={`Jogador ${index + 1}`}
        placeholder="Digite o nome do jogador"
      />

      {amountOfPlayers > 1 && (
        <Button
          icon={Trash}
          type="danger"
          onClick={() => onRemovePlayer(player.id)}
        />
      )}
    </Container>
  )
}
