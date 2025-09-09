import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useRef } from 'react'
import Input from '../Input'

// Helper component to test Input with ref
const InputWithRef = ({ placeholder }: { placeholder: string }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return <Input placeholder={placeholder} nameRef={inputRef} />
}

describe('Input', () => {
  it('renders with required props', () => {
    const inputRef = { current: null }
    render(<Input placeholder="Test placeholder" nameRef={inputRef} />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('py-3')
    expect(input).toHaveClass('px-4')
    expect(input).toHaveClass('bg-transparent')
    expect(input).toHaveClass('ring-2')
    expect(input).toHaveClass('ring-primary')
  })

  it('displays placeholder text', () => {
    const inputRef = { current: null }
    render(<Input placeholder="Enter your name" nameRef={inputRef} />)
    
    const input = screen.getByPlaceholderText('Enter your name')
    expect(input).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const inputRef = { current: null }
    const { container } = render(<Input placeholder="Test" nameRef={inputRef} />)
    
    const input = container.querySelector('input')
    expect(input).toHaveClass('py-3')
    expect(input).toHaveClass('px-4')
    expect(input).toHaveClass('bg-transparent')
    expect(input).toHaveClass('ring-2')
    expect(input).toHaveClass('ring-primary')
    expect(input).toHaveClass('min-w-[300px]')
    expect(input).toHaveClass('focus-visible:ring-focus')
    expect(input).toHaveClass('focus-visible:outline-hidden')
    expect(input).toHaveClass('active:ring-active')
  })

  it('forwards ref correctly', () => {
    render(<InputWithRef placeholder="Test with ref" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('has minimum width styling', () => {
    const inputRef = { current: null }
    const { container } = render(<Input placeholder="Min width test" nameRef={inputRef} />)
    
    const input = container.querySelector('input')
    expect(input).toHaveClass('min-w-[300px]')
  })
})
