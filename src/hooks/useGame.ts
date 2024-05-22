import { useEffect, useState } from 'react'

import { theme } from '@/styles'

const { colors } = theme
const MAX_PLAY_TIME = 10

export function useGame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [startTime, setStartTime] = useState<number | null>()
  const [timeLeft, setTimeLeft] = useState(MAX_PLAY_TIME)

  const timeLeftPercentage = timeLeft / MAX_PLAY_TIME

  const timerColor =
    timeLeftPercentage > 0.5
      ? colors.green100
      : timeLeftPercentage > 0.25
        ? colors.yellow100
        : colors.red100

  function handlePlayPause() {
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)

    if (newPlayingState) {
      setStartTime(new Date().getTime())
      setTimeLeft(MAX_PLAY_TIME)
    }
  }

  useEffect(() => {
    if (!startTime) {
      return
    }

    if (timeLeft <= 0) {
      setIsPlaying(false)
      setTimeLeft(0)

      return
    }

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const decurredTime = now - startTime

      setTimeLeft(MAX_PLAY_TIME - decurredTime / 1000)
    }, 10)

    return () => clearInterval(timer)
  }, [startTime, timeLeft])

  return {
    isPlaying,
    timeLeft,
    timeLeftPercentage,
    timerColor,
    handlePlayPause,
  }
}
