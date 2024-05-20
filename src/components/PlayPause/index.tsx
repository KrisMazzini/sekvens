import { CaretDoubleRight, Pause, Play, X } from 'phosphor-react'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { useGame } from '@/hooks/useGame'

import { Actions, Container, PlayPauseButton, Timer } from './styles'

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

      {isPlaying ? (
        <Modal
          title="Jogo pausado"
          description="Jogando agora: Kristopher Mazzini"
          content={
            <Actions>
              <Button icon={Play} label="Retomar" type="success" />
              <Button
                icon={CaretDoubleRight}
                label="Pular vez"
                type="secondary"
              />
              <Button icon={X} label="Encerrar jogo" type="danger" />
            </Actions>
          }
          triggerButton={
            <PlayPauseButton>
              <Pause size="32" weight="bold" />
              Pausar
            </PlayPauseButton>
          }
        />
      ) : (
        <PlayPauseButton onClick={handlePlayPause}>
          <Play size="32" weight="bold" />
          Jogar
        </PlayPauseButton>
      )}

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
