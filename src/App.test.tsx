import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    expect(screen.getByText(/React TypeScript App/i)).toBeInTheDocument()
  })

  it('renders HMR message', () => {
    render(<App />)
    expect(screen.getByText(/Edit/i)).toBeInTheDocument()
    expect(screen.getByText('src/App.tsx')).toBeInTheDocument()
  })
}) 