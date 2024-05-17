import { GameController, Star } from 'phosphor-react'
import { ComponentProps } from 'react'

import { Player } from '@/hooks/usePlayers'

import { Container, Header, Name, Score, ScoreValue } from './styles'

type PlayerCardProps = ComponentProps<typeof Container> & {
  player: Player
  playing?: boolean
}

export function PlayerCard({
  player,
  playing = false,
  ...props
}: PlayerCardProps) {
  return (
    <Container data-playing={playing} {...props}>
      <Header>
        <Name title={player.name}>{player.name}</Name>

        {playing && (
          <GameController
            aria-label="Jogando agora"
            data-testid="playing-icon"
            size={32}
            weight="fill"
          />
        )}
      </Header>

      <Score>
        <Star size={24} weight="fill" />

        <span>
          Pontuação:{' '}
          <ScoreValue data-testid="score-value">{player.score}</ScoreValue>
        </span>
      </Score>
    </Container>
  )
}
