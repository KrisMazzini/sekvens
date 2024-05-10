import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Component: Header', () => {
  it('should render the title', () => {
    render(<Header />)

    const title = screen.getByTestId('title')
    expect(title).toBeTruthy()
  })

  it('should render the subtitle if the simple prop is undefined', () => {
    render(<Header />)

    const subtitle = screen.getByTestId('subtitle')
    expect(subtitle).toBeTruthy()
  })

  it('should render the subtitle if the simple prop is false', () => {
    render(<Header simple={false} />)

    const subtitle = screen.getByTestId('subtitle')
    expect(subtitle).toBeTruthy()
  })

  it('should not render the subtitle when the simple prop is passed', () => {
    render(<Header simple />)

    const subtitle = screen.queryByTestId('subtitle')
    expect(subtitle).toBeNull()
  })
})
