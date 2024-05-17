import { render, screen } from '@testing-library/react'

import { Input } from '@/components/Input'

describe('Component: Input', () => {
  it('should render the correct error message when the error prop is passed', () => {
    const errorMessage = 'Error test'

    render(<Input label="Test Input" error={errorMessage} />)

    const error = screen.getByText(errorMessage)
    expect(error).toBeTruthy()
  })

  it('should not render an error message when the error sprop is not passed', () => {
    render(<Input label="Test Input" />)

    const error = screen.queryByTestId('error')
    expect(error).toBeNull()
  })

  it("should render the 'XCircle' icon when the error prop is passed", () => {
    render(<Input label="Test Input" error="Error test" />)

    const xCircle = screen.getByTestId('x-circle')
    const checkCircle = screen.queryByTestId('check-circle')

    expect(xCircle).toBeTruthy()
    expect(checkCircle).toBeNull()
  })

  it("should render the 'CheckCircle' icon when the error prop is not passed", () => {
    render(<Input label="Test Input" />)

    const xCircle = screen.queryByTestId('x-circle')
    const checkCircle = screen.getByTestId('check-circle')

    expect(xCircle).toBeNull()
    expect(checkCircle).toBeTruthy()
  })
})
