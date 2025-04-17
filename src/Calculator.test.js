import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Hex Calculator GUI', () => {
  test('renders input and result areas', () => {
    render(<Calculator />);
    const display = screen.getByText((content, element) =>
        element.className.includes('input') && content === '0'
      );
      expect(display).toBeInTheDocument();
  });

  test('digit buttons update input', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('F'));
    expect(screen.getByText('AF')).toBeInTheDocument();
  });

  test('operator displays in input', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('A+')).toBeInTheDocument();
  });

  test('calculates and shows result', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText('= F')).toBeInTheDocument();
  });

  test('clear button resets display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByTestId('clear-button'));
    expect(screen.getByTestId('input-display')).toHaveTextContent('0');
  });

  test('error on subtracting to negative', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText(/Negative result not allowed/i)).toBeInTheDocument();
  });

  test('error on divide by zero', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('A'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));  
    expect(screen.getByText(/Cannot divide by zero/i)).toBeInTheDocument();
  });
});
