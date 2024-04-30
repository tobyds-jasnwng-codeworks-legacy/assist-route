import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Context } from '@src/App';
import { Student } from '@src/types/index';
import AllStudentsList from './index';

describe('AllStudentsList', () => {
  const mockSetSelectedStudent = vi.fn();
  const mockSetShowStudentCard = vi.fn();
  const mockOnClose = vi.fn();
  const mockOnSubmit = vi.fn();

  const props = {
    setSelectedStudent: mockSetSelectedStudent,
    setShowStudentCard: mockSetShowStudentCard,
    onClose: mockOnClose,
    onSubmit: mockOnSubmit,
  };

  const students: Array<Student> = [
    {
      id: 1,
      firstName: 'Thing',
      lastName: 'One',
      morningRoute: '',
      morningStop: '',
      eveningRoute: '',
      eveningStop: '',
      contactPerson1: '',
      contactPerson1Phone: '',
      contactPerson2: '',
      contactPerson2Phone: '',
      address: '',
      additionalInfo: '',
      photo: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 2,
      firstName: 'Other',
      lastName: 'Thing',
      morningRoute: '',
      morningStop: '',
      eveningRoute: '',
      eveningStop: '',
      contactPerson1: '',
      contactPerson1Phone: '',
      contactPerson2: '',
      contactPerson2Phone: '',
      address: '',
      additionalInfo: '',
      photo: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  beforeEach(() => {
    render(
      <Context.Provider value={{ students }}>
        <AllStudentsList {...props} />
      </Context.Provider>
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByTestId('student-button')).toHaveTextContent(
      'Add new student'
    );
  });

  it('calls onClose and onSubmit when button is clicked', async () => {
    const button = screen.getByTestId('student-button');
    fireEvent.click(button);
    expect(mockOnClose).toHaveBeenCalled();
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('renders all students', () => {
    students.forEach((student: Student) => {
      expect(screen.getByTestId('student-list')).toHaveTextContent(
        `${student.firstName} ${student.lastName}`
      );
    });
  });
});
