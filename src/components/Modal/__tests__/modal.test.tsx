import { fireEvent, render, screen } from '@testing-library/react'

import { Modal } from '../'

describe('Component: Modal', () => {
  beforeEach(() => {
    render(
      <Modal
        title="Title"
        description="Description"
        content={<div>Content</div>}
        triggerButton={<button>Trigger</button>}
      />,
    )
  })

  it('should not render the elements if the trigger was not clicked', () => {
    const title = screen.queryByText('Title')
    const content = screen.queryByText('Content')
    const description = screen.queryByText('Description')

    expect(title).toBeNull()
    expect(content).toBeNull()
    expect(description).toBeNull()
  })

  it('should render the elements if the trigger was clicked', () => {
    const triggerButton = screen.getByText('Trigger')

    fireEvent.click(triggerButton)

    const title = screen.getByText('Title')
    const content = screen.getByText('Content')
    const description = screen.getByText('Description')

    expect(title).toBeTruthy()
    expect(content).toBeTruthy()
    expect(description).toBeTruthy()
  })
})
