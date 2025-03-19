/// <reference types="vitest/globals" />
import { describe, it, expect } from 'vitest';
import { render, screen } from './test/test-utils';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    
    expect(screen.getByRole('heading', { 
      name: /react typescript app/i 
    })).toBeInTheDocument();
  });

  it('renders edit instruction text', () => {
    render(<App />);
    
    expect(screen.getByText(/edit.*and save to test hmr/i)).toBeInTheDocument();
  });
}); 