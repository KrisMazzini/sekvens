import { render, screen } from '@testing-library/react'

import { PlayerCard } from '@/components/PlayerCard'
import { Player } from '@/hooks/usePlayers'

const player: Player = {
  id: '1',
  name: 'JOHNDOE',
  score: 14,
}

describe('Component: Player Card', () => {
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
