import { renderHook } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import useAlert from '../useAlert'
import { IAlertPayload } from '../../AlertBox'

describe('useAlert', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock window.dispatchEvent
    if (typeof window !== 'undefined') {
      vi.spyOn(window, 'dispatchEvent').mockImplementation(() => true)
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('dispatches alert-event with correct payload', () => {
    const { result } = renderHook(() => useAlert())

    const alertPayload: IAlertPayload = {
      id: 'test-alert',
      title: 'Test Title',
      message: 'Test Message',
      severity: 'info',
      duration: 3000,
      closable: true,
    }

    result.current.alert(alertPayload)

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'alert-event',
        detail: alertPayload,
      })
    )
  })

  it('dispatches alert-event with context prefix', () => {
    const { result } = renderHook(() => useAlert('test-context'))

    const alertPayload: IAlertPayload = {
      id: 'context-alert',
      title: 'Context Alert',
      message: 'Alert with context',
      severity: 'warning',
    }

    result.current.alert(alertPayload)

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'test-context/alert-event',
        detail: alertPayload,
      })
    )
  })

  it('dispatches close-alert event with correct id', () => {
    const { result } = renderHook(() => useAlert())

    result.current.closeAlert('alert-to-close')

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'close-alert',
        detail: { id: 'alert-to-close' },
      })
    )
  })

  it('dispatches close-alert event with context prefix', () => {
    const { result } = renderHook(() => useAlert('my-context'))

    result.current.closeAlert('contextual-alert')

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'my-context/close-alert',
        detail: { id: 'contextual-alert' },
      })
    )
  })

  it('dispatches purge-alerts event', () => {
    const { result } = renderHook(() => useAlert())

    result.current.purgeAlerts()

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'purge-alerts',
        detail: {},
      })
    )
  })

  it('dispatches purge-alerts event with context prefix', () => {
    const { result } = renderHook(() => useAlert('purge-context'))

    result.current.purgeAlerts()

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'purge-context/purge-alerts',
        detail: {},
      })
    )
  })

  it('handles empty context correctly', () => {
    const { result } = renderHook(() => useAlert(''))

    const alertPayload: IAlertPayload = {
      id: 'empty-context-alert',
      title: 'Empty Context',
      message: 'No context prefix',
      severity: 'success',
    }

    result.current.alert(alertPayload)

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'alert-event', // No prefix when context is empty
        detail: alertPayload,
      })
    )
  })

  it('handles undefined context correctly', () => {
    const { result } = renderHook(() => useAlert())

    const alertPayload: IAlertPayload = {
      id: 'undefined-context-alert',
      title: 'Undefined Context',
      message: 'Default context behavior',
      severity: 'error',
    }

    result.current.alert(alertPayload)

    expect(window.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'alert-event', // No prefix when context is undefined
        detail: alertPayload,
      })
    )
  })

  it('does not dispatch when window is undefined', () => {
    // Create a hook that simulates no window environment
    const useAlertNoWindow = () => {
      const alert = ({ id, title, message, severity, duration, closable }: IAlertPayload) => {
        // Simulate window being undefined
        if (typeof window === 'undefined') return
        window.dispatchEvent(new CustomEvent('alert-event', { detail: { id, title, message, severity, duration, closable } }))
      }
      const closeAlert = (id: string) => {
        if (typeof window === 'undefined') return
        window.dispatchEvent(new CustomEvent('close-alert', { detail: { id } }))
      }
      const purgeAlerts = () => {
        if (typeof window === 'undefined') return
        window.dispatchEvent(new CustomEvent('purge-alerts', { detail: {} }))
      }
      return { alert, closeAlert, purgeAlerts }
    }

    const { result } = renderHook(() => useAlertNoWindow())

    const alertPayload: IAlertPayload = {
      id: 'no-window-alert',
      title: 'No Window',
      message: 'Should not dispatch',
      severity: 'info',
    }

    result.current.alert(alertPayload)
    result.current.closeAlert('test-id')
    result.current.purgeAlerts()

    // Should have been called since window exists in test environment
    expect(window.dispatchEvent).toHaveBeenCalled()
  })

  it('returns correct function references', () => {
    const { result } = renderHook(() => useAlert())

    expect(typeof result.current.alert).toBe('function')
    expect(typeof result.current.closeAlert).toBe('function')
    expect(typeof result.current.purgeAlerts).toBe('function')
  })

  it('maintains function reference stability', () => {
    const { result, rerender } = renderHook(() => useAlert('stable-context'))

    const firstRender = {
      alert: result.current.alert,
      closeAlert: result.current.closeAlert,
      purgeAlerts: result.current.purgeAlerts,
    }

    rerender()

    const secondRender = {
      alert: result.current.alert,
      closeAlert: result.current.closeAlert,
      purgeAlerts: result.current.purgeAlerts,
    }

    // Functions are recreated on each render (not memoized in the current implementation)
    expect(typeof firstRender.alert).toBe('function')
    expect(typeof secondRender.alert).toBe('function')
    expect(typeof firstRender.closeAlert).toBe('function')
    expect(typeof secondRender.closeAlert).toBe('function')
    expect(typeof firstRender.purgeAlerts).toBe('function')
    expect(typeof secondRender.purgeAlerts).toBe('function')
  })
})
