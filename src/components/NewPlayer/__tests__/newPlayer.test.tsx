import { fireEvent, render, screen } from '@testing-library/react'
import { NewPlayer, Player } from '@/components/NewPlayer'

const player: Player = {
  name: 'John Doe',
  id: '1',
}

describe('Component: NewPlayer', () => {
  it('should render the correct label based on the index prop', () => {
    const index = 0

    render(
      <NewPlayer
        player={player}
        index={index}
        amountOfPlayers={3}
        onRemovePlayer={() => <></>}
      />,
    )

    const label = screen.getByText(`Jogador ${index + 1}`)
    expect(label).toBeTruthy()
  })

  it("should render the 'Button' component when the amountOfPlayers prop is greater than 1", () => {
    render(
      <NewPlayer
        player={player}
        index={0}
        amountOfPlayers={2}
        onRemovePlayer={() => <></>}
      />,
    )

    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
  })

  it("should not render the 'Button' component when the amountOfPlayers prop is equal to 1", () => {
    render(
      <NewPlayer
        player={player}
        index={0}
        amountOfPlayers={1}
        onRemovePlayer={() => <></>}
      />,
    )

    const button = screen.queryByRole('button')
    expect(button).toBeNull()
  })

  it('should remove the correct player based on the player prop', () => {
    const handleRemovePlayer = jest.fn()

    render(
      <NewPlayer
        player={player}
        index={0}
        amountOfPlayers={2}
        onRemovePlayer={handleRemovePlayer}
      />,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleRemovePlayer).toHaveBeenCalledTimes(1)
    expect(handleRemovePlayer).toHaveBeenCalledWith(player.id)
  })
})
