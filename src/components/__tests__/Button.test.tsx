import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import Button from '../Button'

describe('Button', () => {
  it('renders with required props', () => {
    const handleClick = vi.fn()
    render(<Button label="Click me" action={handleClick} />)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveTextContent('Click me')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button label="Click me" action={handleClick} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = vi.fn()
    render(<Button label="Disabled" action={handleClick} disabled />)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('shows loading state', () => {
    const handleClick = vi.fn()
    render(<Button label="Loading" action={handleClick} loading />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    // The Spinner component should be rendered
    expect(button).toContainHTML('Loading')
  })

  it('has correct default styling', () => {
    const handleClick = vi.fn()
    const { container } = render(<Button label="Test" action={handleClick} />)
    
    const button = container.querySelector('button')
    expect(button).toHaveClass('flex')
    expect(button).toHaveClass('justify-center')
    expect(button).toHaveClass('items-center')
    expect(button).toHaveClass('py-2')
    expect(button).toHaveClass('px-4')
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('ring-primary')
    expect(button).toHaveClass('min-w-[300px]')
  })
})
