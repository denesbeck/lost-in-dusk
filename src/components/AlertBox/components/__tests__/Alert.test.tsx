import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import Alert from '../Alert'
import { Severity } from '../../AlertBox'

// Mock react-icons
vi.mock('react-icons/fa', () => ({
  FaInfoCircle: () => <div data-testid="info-icon">Info</div>,
  FaCheckCircle: () => <div data-testid="success-icon">Success</div>,
  FaExclamationTriangle: () => <div data-testid="warning-icon">Warning</div>,
  FaExclamationCircle: () => <div data-testid="error-icon">Error</div>,
}))

vi.mock('react-icons/io', () => ({
  IoMdClose: () => <div data-testid="close-icon">Close</div>,
}))

describe('Alert', () => {
  const mockClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  const defaultProps = {
    title: 'Test Alert',
    message: 'Test message',
    severity: 'info' as Severity,
    close: mockClose,
  }

  it('renders alert with correct content', () => {
    render(<Alert {...defaultProps} />)

    expect(screen.getByText('Test Alert')).toBeInTheDocument()
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('displays correct icon for each severity level', () => {
    const severities: Severity[] = ['info', 'success', 'warning', 'error']

    severities.forEach((severity) => {
      const { unmount } = render(
        <Alert {...defaultProps} severity={severity} />
      )

      expect(screen.getByTestId(`${severity}-icon`)).toBeInTheDocument()
      unmount()
    })
  })

  it('applies correct CSS class for each severity level', () => {
    const severities: { severity: Severity; expectedClass: string }[] = [
      { severity: 'info', expectedClass: 'bg-alert-info' },
      { severity: 'success', expectedClass: 'bg-alert-success' },
      { severity: 'warning', expectedClass: 'bg-alert-warning' },
      { severity: 'error', expectedClass: 'bg-alert-error' },
    ]

    severities.forEach(({ severity, expectedClass }) => {
      const { container, unmount } = render(
        <Alert {...defaultProps} severity={severity} />
      )

      const alertElement = container.firstChild as HTMLElement
      expect(alertElement).toHaveClass(expectedClass)
      unmount()
    })
  })

  it('shows close button when closable is true (default)', () => {
    render(<Alert {...defaultProps} />)

    expect(screen.getByTestId('close-icon')).toBeInTheDocument()
  })

  it('hides close button when closable is false', () => {
    render(<Alert {...defaultProps} closable={false} />)

    expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument()
  })

  it('calls close function when close button is clicked', () => {
    render(<Alert {...defaultProps} />)

    const closeButton = screen.getByTestId('close-icon').closest('button')
    fireEvent.click(closeButton!)

    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('auto-closes after default duration (5000ms)', async () => {
    render(<Alert {...defaultProps} />)

    expect(mockClose).not.toHaveBeenCalled()

    // Fast-forward time by 5000ms
    vi.advanceTimersByTime(5000)

    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('auto-closes after custom duration', async () => {
    render(<Alert {...defaultProps} duration={3000} />)

    expect(mockClose).not.toHaveBeenCalled()

    // Fast-forward time by 3000ms
    vi.advanceTimersByTime(3000)

    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('clears timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout')
    
    const { unmount } = render(<Alert {...defaultProps} />)
    
    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
    clearTimeoutSpy.mockRestore()
  })

  it('has correct styling classes', () => {
    const { container } = render(<Alert {...defaultProps} />)
    
    const alertElement = container.firstChild as HTMLElement
    expect(alertElement).toHaveClass('animate-text-focus')
    expect(alertElement).toHaveClass('relative')
    expect(alertElement).toHaveClass('flex')
    expect(alertElement).toHaveClass('flex-col')
    expect(alertElement).toHaveClass('items-start')
    expect(alertElement).toHaveClass('px-4')
    expect(alertElement).toHaveClass('py-2')
    expect(alertElement).toHaveClass('text-black')
    expect(alertElement).toHaveClass('w-[30rem]')
    expect(alertElement).toHaveClass('max-w-[95dvw]')
    expect(alertElement).toHaveClass('rounded-sm')
  })

  it('renders long title and message correctly', () => {
    const longTitle = 'This is a very long alert title that should wrap properly'
    const longMessage = 'This is a very long alert message that should also wrap properly and display all the content without any issues'

    render(
      <Alert
        {...defaultProps}
        title={longTitle}
        message={longMessage}
      />
    )

    expect(screen.getByText(longTitle)).toBeInTheDocument()
    expect(screen.getByText(longMessage)).toBeInTheDocument()
  })
})
