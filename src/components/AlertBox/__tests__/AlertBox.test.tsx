import { render, screen, waitFor, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import AlertBox, { IAlertPayload } from '../AlertBox'

// Mock the Alert component
vi.mock('../components', () => ({
  Alert: ({ title, message, severity, close }: any) => (
    <div data-testid="alert">
      <div data-testid="alert-title">{title}</div>
      <div data-testid="alert-message">{message}</div>
      <div data-testid="alert-severity">{severity}</div>
      <button data-testid="alert-close" onClick={close}>
        Close
      </button>
    </div>
  ),
}))

describe('AlertBox', () => {
  beforeEach(() => {
    // Clear any existing event listeners
    vi.clearAllMocks()
  })

  afterEach(() => {
    // Clean up any remaining alerts
    window.dispatchEvent(new CustomEvent('purge-alerts'))
  })

  it('renders without crashing', () => {
    render(<AlertBox />)
    expect(screen.queryByTestId('alert')).not.toBeInTheDocument()
  })

  it('displays alert when alert-event is dispatched', async () => {
    render(<AlertBox />)

    const alertPayload: IAlertPayload = {
      id: 'test-alert-1',
      title: 'Test Alert',
      message: 'This is a test message',
      severity: 'info',
    }

    act(() => {
      window.dispatchEvent(
        new CustomEvent('alert-event', { detail: alertPayload })
      )
    })

    await waitFor(() => {
      expect(screen.getByTestId('alert')).toBeInTheDocument()
      expect(screen.getByTestId('alert-title')).toHaveTextContent('Test Alert')
      expect(screen.getByTestId('alert-message')).toHaveTextContent('This is a test message')
      expect(screen.getByTestId('alert-severity')).toHaveTextContent('info')
    })
  })

  it('displays multiple alerts', async () => {
    render(<AlertBox />)

    const alert1: IAlertPayload = {
      id: 'alert-1',
      title: 'First Alert',
      message: 'First message',
      severity: 'error',
    }

    const alert2: IAlertPayload = {
      id: 'alert-2',
      title: 'Second Alert',
      message: 'Second message',
      severity: 'success',
    }

    act(() => {
      window.dispatchEvent(new CustomEvent('alert-event', { detail: alert1 }))
      window.dispatchEvent(new CustomEvent('alert-event', { detail: alert2 }))
    })

    await waitFor(() => {
      const alerts = screen.getAllByTestId('alert')
      expect(alerts).toHaveLength(2)
    })
  })

  it('respects maxAlert limit', async () => {
    render(<AlertBox maxAlert={2} />)

    act(() => {
      // Dispatch 3 alerts
      for (let i = 1; i <= 3; i++) {
        const alert: IAlertPayload = {
          id: `alert-${i}`,
          title: `Alert ${i}`,
          message: `Message ${i}`,
          severity: 'info',
        }
        window.dispatchEvent(new CustomEvent('alert-event', { detail: alert }))
      }
    })

    await waitFor(() => {
      const alerts = screen.getAllByTestId('alert')
      expect(alerts).toHaveLength(2)
    })
  })

  it('prevents duplicate alerts with same id', async () => {
    render(<AlertBox />)

    const alertPayload: IAlertPayload = {
      id: 'duplicate-test',
      title: 'Duplicate Alert',
      message: 'This should only appear once',
      severity: 'warning',
    }

    // Dispatch the same alert twice
    act(() => {
      window.dispatchEvent(new CustomEvent('alert-event', { detail: alertPayload }))
      window.dispatchEvent(new CustomEvent('alert-event', { detail: alertPayload }))
    })

    await waitFor(() => {
      const alerts = screen.getAllByTestId('alert')
      expect(alerts).toHaveLength(1)
    })
  })

  it('removes alert when close-alert event is dispatched', async () => {
    render(<AlertBox />)

    const alertPayload: IAlertPayload = {
      id: 'closeable-alert',
      title: 'Closeable Alert',
      message: 'This alert can be closed',
      severity: 'info',
    }

    // Add alert
    act(() => {
      window.dispatchEvent(new CustomEvent('alert-event', { detail: alertPayload }))
    })

    await waitFor(() => {
      expect(screen.getByTestId('alert')).toBeInTheDocument()
    })

    // Close alert
    act(() => {
      window.dispatchEvent(new CustomEvent('close-alert', { detail: alertPayload }))
    })

    await waitFor(() => {
      expect(screen.queryByTestId('alert')).not.toBeInTheDocument()
    })
  })

  it('clears all alerts when purge-alerts event is dispatched', async () => {
    render(<AlertBox />)

    act(() => {
      // Add multiple alerts
      for (let i = 1; i <= 3; i++) {
        const alert: IAlertPayload = {
          id: `alert-${i}`,
          title: `Alert ${i}`,
          message: `Message ${i}`,
          severity: 'info',
        }
        window.dispatchEvent(new CustomEvent('alert-event', { detail: alert }))
      }
    })

    await waitFor(() => {
      const alerts = screen.getAllByTestId('alert')
      expect(alerts).toHaveLength(3)
    })

    // Purge all alerts
    act(() => {
      window.dispatchEvent(new CustomEvent('purge-alerts'))
    })

    await waitFor(() => {
      expect(screen.queryByTestId('alert')).not.toBeInTheDocument()
    })
  })

  it('works with context prefix', async () => {
    render(<AlertBox context="test-context" />)

    const alertPayload: IAlertPayload = {
      id: 'context-alert',
      title: 'Context Alert',
      message: 'Alert with context',
      severity: 'success',
    }

    // Should respond to context-prefixed event
    act(() => {
      window.dispatchEvent(
        new CustomEvent('test-context/alert-event', { detail: alertPayload })
      )
    })

    await waitFor(() => {
      expect(screen.getByTestId('alert')).toBeInTheDocument()
    })

    // Should not respond to non-prefixed event
    const anotherAlert: IAlertPayload = {
      id: 'no-context-alert',
      title: 'No Context Alert',
      message: 'Alert without context',
      severity: 'error',
    }

    act(() => {
      window.dispatchEvent(
        new CustomEvent('alert-event', { detail: anotherAlert })
      )
    })

    // Should still only have one alert
    await waitFor(() => {
      const alerts = screen.getAllByTestId('alert')
      expect(alerts).toHaveLength(1)
    })
  })
})
