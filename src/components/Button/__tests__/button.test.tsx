import { render, screen } from '@testing-library/react'
import { TestTube } from 'phosphor-react'

import { Button } from '@/components/Button'

describe('Component: Button', () => {
  it("should render the 'Icon' component when the icon prop is passed", () => {
    render(<Button icon={TestTube} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toBeTruthy()
  })

  it("should not render the 'Icon' component when the icon prop is not passed", () => {
    render(<Button />)

    const icon = screen.queryByTestId('icon')
    expect(icon).toBeNull()
  })
})
