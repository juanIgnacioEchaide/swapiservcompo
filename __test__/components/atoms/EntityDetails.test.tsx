import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import EntityDetails from '@/components/atoms/page/EntityDetails';

describe('EntityDetails Component', () => {
  const mockData = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };

  test('renders formatted data correctly', () => {
    render(<EntityDetails data={mockData} />);

    // Check if formatted data is displayed correctly
    expect(screen.getByText('key1: value1')).toBeInTheDocument();
    expect(screen.getByText('key2: value2')).toBeInTheDocument();
    expect(screen.getByText('key3: value3')).toBeInTheDocument();
  });

  test('handles empty data gracefully', () => {
    render(<EntityDetails data={{}} />);

    // Check if there's no formatted data displayed when data is null
    expect(screen.queryByText(/:/)).toBeNull();
  });

  // You can add more test cases to cover other scenarios and edge cases
});
