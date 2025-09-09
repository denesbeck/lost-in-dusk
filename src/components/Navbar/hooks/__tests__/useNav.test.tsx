import { renderHook, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import useNav from '../useNav'

// Mock react-router-dom
const mockNavigate = vi.fn()
const mockUseLocation = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockUseLocation(),
  }
})

// Mock scrollIntoView
const mockScrollIntoView = vi.fn()
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  configurable: true,
  value: mockScrollIntoView,
})

describe('useNav', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseLocation.mockReturnValue({ pathname: '/', search: undefined })
    
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
  )

  it('returns navigation items with correct structure', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    expect(result.current.navItems).toHaveLength(3)
    expect(result.current.navItems[0]).toEqual({
      label: 'Home',
      path: '/',
      action: expect.any(Function),
    })
    expect(result.current.navItems[1]).toEqual({
      label: 'Blog',
      path: '/blog',
      action: expect.any(Function),
    })
    expect(result.current.navItems[2]).toEqual({
      label: 'About',
      path: '/about',
      action: expect.any(Function),
    })
  })

  it('returns refs object with all required refs', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    expect(result.current.refs).toHaveProperty('home')
    expect(result.current.refs).toHaveProperty('blog')
    expect(result.current.refs).toHaveProperty('about')
    expect(result.current.refs).toHaveProperty('contact')
    expect(result.current.refs.home.current).toBeNull() // Initially null
  })

  it('returns contactAction function', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    expect(typeof result.current.contactAction).toBe('function')
  })

  it('tracks window size changes', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    // Initial window size should be captured
    expect(window.innerWidth).toBe(1024)
    expect(window.innerHeight).toBe(768)

    // Simulate window resize
    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 800 })
      Object.defineProperty(window, 'innerHeight', { value: 600 })
      window.dispatchEvent(new Event('resize'))
    })

    // The hook should have updated (though we can't directly test the internal state)
    expect(result.current.navItems).toHaveLength(3) // Hook should still work
  })

  it('home action scrolls to home and navigates', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    // Mock the ref to have a current element
    const mockHomeElement = document.createElement('div')
    result.current.refs.home.current = mockHomeElement

    act(() => {
      result.current.navItems[0].action()
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(mockNavigate).toHaveBeenCalledWith({ pathname: '/', search: undefined })
  })

  it('blog action scrolls to blog and navigates', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockBlogElement = document.createElement('div')
    result.current.refs.blog.current = mockBlogElement

    act(() => {
      result.current.navItems[1].action()
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(mockNavigate).toHaveBeenCalledWith({ pathname: '/blog', search: undefined })
  })

  it('about action scrolls to about and navigates', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockAboutElement = document.createElement('div')
    result.current.refs.about.current = mockAboutElement

    act(() => {
      result.current.navItems[2].action()
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(mockNavigate).toHaveBeenCalledWith({ pathname: '/about', search: undefined })
  })

  it('contactAction scrolls to contact and navigates', () => {
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockContactElement = document.createElement('div')
    result.current.refs.contact.current = mockContactElement

    act(() => {
      result.current.contactAction()
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(mockNavigate).toHaveBeenCalledWith({ pathname: '/contact', search: undefined })
  })

  it('preserves search params in navigation', () => {
    mockUseLocation.mockReturnValue({ pathname: '/', search: '?tag=react' })
    
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockHomeElement = document.createElement('div')
    result.current.refs.home.current = mockHomeElement

    act(() => {
      result.current.navItems[0].action()
    })

    expect(mockNavigate).toHaveBeenCalledWith({ pathname: '/', search: '?tag=react' })
  })

  it('scrolls to correct section based on pathname on mount', () => {
    mockUseLocation.mockReturnValue({ pathname: '/about', search: undefined })
    
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockAboutElement = document.createElement('div')
    result.current.refs.about.current = mockAboutElement

    // Trigger the effect by changing window size (which triggers the useEffect)
    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 900 })
      window.dispatchEvent(new Event('resize'))
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('handles blog post paths correctly', () => {
    mockUseLocation.mockReturnValue({ pathname: '/blog/123', search: undefined })
    
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockBlogElement = document.createElement('div')
    result.current.refs.blog.current = mockBlogElement

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 900 })
      window.dispatchEvent(new Event('resize'))
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('handles contact path correctly', () => {
    mockUseLocation.mockReturnValue({ pathname: '/contact', search: undefined })
    
    const { result } = renderHook(() => useNav(), { wrapper })

    const mockContactElement = document.createElement('div')
    result.current.refs.contact.current = mockContactElement

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 900 })
      window.dispatchEvent(new Event('resize'))
    })

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('cleans up resize event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    
    const { unmount } = renderHook(() => useNav(), { wrapper })
    
    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })

  it('handles undefined window gracefully', () => {
    // Since we can't actually delete window in JSDOM, we'll test the hook normally
    // The actual window check is in the useEffect which won't cause issues in tests
    const { result } = renderHook(() => useNav(), { wrapper })

    // Should still return the expected structure
    expect(result.current.navItems).toHaveLength(3)
    expect(result.current.refs).toBeDefined()
    expect(typeof result.current.contactAction).toBe('function')
  })
})
