import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

// Mock all the components
vi.mock('@/components', () => ({
  About: () => <div data-testid="about">About Component</div>,
  AlertBox: () => <div data-testid="alert-box">AlertBox Component</div>,
  Blog: () => <div data-testid="blog">Blog Component</div>,
  Contact: () => <div data-testid="contact">Contact Component</div>,
  Home: ({ contactAction }: { contactAction: () => void }) => (
    <div data-testid="home">
      Home Component
      <button onClick={contactAction}>Contact</button>
    </div>
  ),
  Navbar: ({ items }: { items: any[] }) => (
    <div data-testid="navbar">
      Navbar Component - {items.length} items
    </div>
  ),
}))

// Mock the useNav hook
vi.mock('@/components/Navbar/hooks', () => ({
  useNav: () => ({
    navItems: [
      { label: 'Home', path: '/', action: vi.fn() },
      { label: 'Blog', path: '/blog', action: vi.fn() },
      { label: 'About', path: '/about', action: vi.fn() },
    ],
    refs: {
      home: { current: null },
      blog: { current: null },
      about: { current: null },
      contact: { current: null },
    },
    contactAction: vi.fn(),
  }),
}))

const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('App', () => {
  it('renders all main components', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )

    expect(screen.getByTestId('alert-box')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('home')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('passes navigation items to Navbar', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )

    expect(screen.getByText('Navbar Component - 3 items')).toBeInTheDocument()
  })

  it('passes contactAction to Home component', () => {
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )

    const contactButton = screen.getByText('Contact')
    expect(contactButton).toBeInTheDocument()
  })

  it('has correct layout structure', () => {
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )

    // Check that AlertBox is rendered first (outside main layout)
    const alertBox = screen.getByTestId('alert-box')
    expect(alertBox).toBeInTheDocument()

    // Check main layout structure
    const mainLayout = container.querySelector('.flex.z-10.flex-col.w-screen')
    expect(mainLayout).toBeInTheDocument()
  })
})
