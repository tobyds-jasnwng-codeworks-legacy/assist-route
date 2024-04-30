import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render default error state', () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Something went wrong'
    );
  });
  it('should render custom error state', () => {
    render(<ErrorMessage message='Email is already taken' />);
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Email is already taken'
    );
  });
});
