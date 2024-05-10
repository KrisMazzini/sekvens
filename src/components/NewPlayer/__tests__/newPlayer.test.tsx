import { render, screen } from '@testing-library/react'
import { NewPlayer } from '@/components/NewPlayer'

describe('Component: NewPlayer', () => {
  it('should render the correct label based on the index prop', () => {
    const index = 0

    render(<NewPlayer index={index} amountOfPlayers={3} />)

    const label = screen.getByText(`Jogador ${index + 1}`)
    expect(label).toBeTruthy()
  })

  it("should render the 'Button' component when the amountOfPlayers prop is greater than 1", () => {
    render(<NewPlayer index={0} amountOfPlayers={2} />)

    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
  })

  it("should not render the 'Button' component when the amountOfPlayers prop is equal to 1", () => {
    render(<NewPlayer index={0} amountOfPlayers={1} />)

    const button = screen.queryByRole('button')
    expect(button).toBeNull()
  })
})
