import { render, screen } from '@testing-library/react'

import { PlayerCard } from '@/components/PlayerCard'
import { Player } from '@/hooks/usePlayers'

const player: Player = {
  id: '1',
  name: 'JOHNDOE',
}

describe('Component: Player Card', () => {
  it('should consider the score as 0 if the prop is not passed', () => {
    render(<PlayerCard player={player} />)

    const scoreValue = screen.getByTestId('score-value')
    expect(scoreValue.innerHTML).toBe('0')
  })

  it('should consider the corret score if the prop is passed', () => {
    const score = 100
    render(<PlayerCard player={player} score={score} />)

    const scoreValue = screen.getByTestId('score-value')
    expect(scoreValue.innerHTML).toBe(String(score))
  })

  it('should display the Controller icon if the player is playing', () => {
    render(<PlayerCard player={player} playing />)

    const controllerIcon = screen.getByTestId('playing-icon')
    expect(controllerIcon).toBeTruthy()
  })

  it('should not display the Controller icon if the player is not playing', () => {
    render(<PlayerCard player={player} />)

    const controllerIcon = screen.queryByTestId('playing-icon')
    expect(controllerIcon).toBeNull()
  })
})
