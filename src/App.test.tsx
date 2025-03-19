/// <reference types="vitest/globals" />
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    expect(screen.getByText(/React TypeScript App/i)).toBeInTheDocument()
  })

  it('renders HMR message', () => {
    render(<App />)
    const message = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && content.includes('Edit')
    })
    expect(message).toBeInTheDocument()
    expect(screen.getByText('src/App.tsx')).toBeInTheDocument()
  })
}) 