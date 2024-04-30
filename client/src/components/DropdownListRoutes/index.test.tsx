import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Route } from '@src/types/index';
import DropdownListRoutes from './index';

describe('DropdownListRoutes', () => {
  const mockSetSelectedStudent = vi.fn();
  const mockSetShowStudentCard = vi.fn();
  const mockOnClose = vi.fn();

  const props = {
    setSelectedStudent: mockSetSelectedStudent,
    setShowStudentCard: mockSetShowStudentCard,
    onClose: mockOnClose,
    routes: [
      { id: '1', name: 'Route 1', type: 'Type 1' } as Route,
      { id: '2', name: 'Route 2', type: 'Type 2' } as Route,
    ],
  };

  beforeEach(() => {
    render(<DropdownListRoutes {...props} />);
  });

  it('renders without crashing', () => {
    expect(screen.getByTestId('routeInfoContainer')).toBeInTheDocument();
  });

  it('renders the correct number of routes', () => {
    const select = screen.getByTestId('dropdownRoutes');
    expect(select.children.length).toBe(props.routes.length + 1); // +1 for the disabled option
  });
});
