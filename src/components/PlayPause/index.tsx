import { Pause, Play } from 'phosphor-react'

import { Button, Container, Timer } from './styles'
import { useGame } from '@/hooks/useGame'

export function PlayPause() {
  const {
    isPlaying,
    handlePlayPause,
    timeLeft,
    timeLeftPercentage,
    timerColor,
  } = useGame()

  return (
    <Container css={{ '--timeLeftPercentage': timeLeftPercentage }}>
      <Timer>
        Tempo restante <span>{timeLeft.toFixed(2)}s</span>
      </Timer>

      <Button onClick={handlePlayPause}>
        {isPlaying ? (
          <>
            <Pause size="32" weight="bold" />
            Pausar
          </>
        ) : (
          <>
            <Play size="32" weight="bold" />
            Jogar
          </>
        )}
      </Button>

      <svg>
        <circle
          cx="50%"
          cy="50%"
          r={96.5}
          strokeWidth={10}
          fill="none"
          stroke={String(timerColor)}
          strokeDasharray={606}
          strokeDashoffset={(1 - timeLeftPercentage) * 606}
        />
      </svg>
    </Container>
  )
}
