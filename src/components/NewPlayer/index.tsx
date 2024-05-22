import { Trash } from 'phosphor-react'

import { Input } from '@/components//Input'
import { Button } from '@/components/Button'
import { Player } from '@/hooks/usePlayers'

import { Container } from './styles'

type NewPlayerProps = {
  index: number
  player: Player
  error?: string
  amountOfPlayers: number
  onChange: (id: string, newName: string) => void
  onRemovePlayer: (id: string) => void
}

export function NewPlayer({
  index,
  player,
  error,
  amountOfPlayers,
  onChange,
  onRemovePlayer,
}: NewPlayerProps) {
  return (
    <Container>
      <Input
        autoFocus
        label={`Jogador ${index + 1}`}
        placeholder="Digite o nome do jogador"
        minLength={3}
        maxLength={10}
        error={error}
        value={player.name}
        onChange={(e) => onChange(player.id, e.target.value)}
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
