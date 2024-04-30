import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import NavBar from '.';

describe('NavBar', () => {
  it('should render the project name', () => {
    const { getByText } = render(<NavBar toggleStudentsList={() => {}} />);
    expect(getByText('ASSIST ROUTE')).toBeInTheDocument();
  });

  it('should render the manage students button', () => {
    const { getByText } = render(<NavBar toggleStudentsList={() => {}} />);
    expect(getByText('Manage students')).toBeInTheDocument();
  });

  it('should call toggleStudentsList when manage students button is clicked', () => {
    const mockToggleStudentsList = vi.fn();
    const { getByText } = render(
      <NavBar toggleStudentsList={mockToggleStudentsList} />
    );
    fireEvent.click(getByText('Manage students'));
    expect(mockToggleStudentsList).toHaveBeenCalled();
  });
});
