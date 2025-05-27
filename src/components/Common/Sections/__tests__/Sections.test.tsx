import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sections from '../index';
import React from 'react';

const mockReplace = jest.fn();
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => new URLSearchParams('')),
  useRouter: jest.fn(() => ({
    replace: mockReplace,
  })),
  usePathname: jest.fn(() => '/test-path'),
}));

describe('Sections Component', () => {
  const mockSteps = ['Step 1', 'Step 2', 'Step 3'];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all steps', () => {
    render(<Sections steps={mockSteps} />);

    mockSteps.forEach(step => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  test('applies active class to default section', () => {
    render(<Sections steps={mockSteps} />);

    expect(screen.getByText('Step 1')).toHaveClass('step--active');

    expect(screen.getByText('Step 2')).not.toHaveClass('step--active');
    expect(screen.getByText('Step 3')).not.toHaveClass('step--active');
  });

  test('handles section change', () => {
    render(<Sections steps={mockSteps} />);

    fireEvent.click(screen.getByText('Step 2'));

    expect(mockReplace).toHaveBeenCalledWith('/test-path?section=Step+2', { scroll: false });
  });

  test('renders correct number of sections', () => {
    render(<Sections steps={mockSteps} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockSteps.length);
  });

  test('does not trigger section change when clicking active section', () => {
    render(<Sections steps={mockSteps} />);

    fireEvent.click(screen.getByText('Step 1'));

    expect(mockReplace).not.toHaveBeenCalled();
  });

  test('respects URL parameter for initial active section', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('next/navigation').useSearchParams.mockImplementation(
      () => new URLSearchParams('section=Step 2')
    );

    render(<Sections steps={mockSteps} />);

    expect(screen.getByText('Step 2')).toHaveClass('step--active');
    expect(screen.getByText('Step 1')).not.toHaveClass('step--active');
  });
});

