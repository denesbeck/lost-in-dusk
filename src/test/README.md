# Testing Documentation

This project uses **Vitest** as the testing framework with **React Testing Library** for component testing.

## Test Structure

```
src/
├── test/
│   ├── setup.ts              # Test setup and global configurations
│   └── README.md             # This file
├── components/
│   ├── AlertBox/
│   │   ├── __tests__/
│   │   │   └── AlertBox.test.tsx
│   │   ├── components/
│   │   │   └── __tests__/
│   │   │       └── Alert.test.tsx
│   │   └── hooks/
│   │       └── __tests__/
│   │           └── useAlert.test.ts
│   ├── Navbar/
│   │   └── hooks/
│   │       └── __tests__/
│   │           └── useNav.test.tsx
│   └── __tests__/
│       ├── Button.test.tsx
│       └── Input.test.tsx
└── __tests__/
    └── App.test.tsx
```

## Available Test Scripts

- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:coverage` - Run tests with coverage report

## Test Coverage

The test suite covers:

### Core Components
- **AlertBox**: Event-driven notification system
- **Alert**: Individual alert component with auto-dismiss
- **Button**: Action button with loading states
- **Input**: Form input with ref forwarding
- **App**: Main application component

### Custom Hooks
- **useAlert**: Alert management hook
- **useNav**: Navigation and scrolling hook

### Key Testing Patterns

1. **Component Rendering**: Verify components render with correct props
2. **User Interactions**: Test click events, form inputs, etc.
3. **Event Systems**: Test custom event dispatching and listening
4. **Hook Behavior**: Test custom hook logic and state management
5. **Accessibility**: Ensure proper ARIA attributes and roles
6. **Styling**: Verify CSS classes are applied correctly

## Running Tests

```bash
# Watch mode (recommended for development)
npm test

# Single run (for CI/CD)
npm run test:run

# With UI interface
npm run test:ui

# With coverage report
npm run test:coverage
```

## Writing New Tests

1. Create test files adjacent to components in `__tests__/` folders
2. Use descriptive test names that explain the behavior being tested
3. Mock external dependencies and complex components
4. Test both happy paths and edge cases
5. Ensure tests are isolated and don't depend on each other

## Test Utilities

The project includes:
- `@testing-library/react` for component testing
- `@testing-library/jest-dom` for additional matchers
- `@testing-library/user-event` for user interaction simulation
- Vitest mocking utilities for dependency mocking
