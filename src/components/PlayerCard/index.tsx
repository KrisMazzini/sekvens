import { ComponentProps } from 'react'
import { GameController, Star } from 'phosphor-react'

import { Container, Header, Name, Score, ScoreValue } from './styles'

import { Player } from '@/hooks/usePlayers'

type PlayerCardProps = ComponentProps<typeof Container> & {
  player: Player
  score?: number
  playing?: boolean
}

export function PlayerCard({
  player,
  score = 0,
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
          Pontuação: <ScoreValue data-testid="score-value">{score}</ScoreValue>
        </span>
      </Score>
    </Container>
  )
}
