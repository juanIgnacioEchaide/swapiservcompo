import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { PaginationSection } from '@/components/molecules/page/PaginationSection';

jest.mock('@ant-design/icons', () => ({
  LeftCircleOutlined: 'div',
  RightCircleOutlined: 'div',
}));

describe('PaginationSection Component', () => {
  it('should handle click events correctly', () => {
    const mockCurrentIndex = 2;
    const mockAvailablePages = 5;
    const mockSetCurrentIndex = jest.fn();
    const mockSetSelectedItemIndex = jest.fn();

    const { getByText } = render(
      <PaginationSection
        currentIndex={mockCurrentIndex}
        setCurrentIndex={mockSetCurrentIndex}
        availablePages={mockAvailablePages}
        setSelectedItemIndex={mockSetSelectedItemIndex}
      />
    );

    const leftButton = getByText('◄');
    const rightButton = getByText('►');

    fireEvent.click(leftButton);
    fireEvent.click(rightButton);

    expect(mockSetCurrentIndex).toHaveBeenCalledTimes(2);
    expect(mockSetCurrentIndex).toHaveBeenCalledWith(1);
    expect(mockSetCurrentIndex).toHaveBeenCalledWith(3);
    expect(mockSetSelectedItemIndex).toHaveBeenCalledWith(0);
  });

  it('should not call setCurrentIndex when currentIndex is at the limits', () => {
    const mockCurrentIndex = 1;
    const mockAvailablePages = 1;
    const mockSetCurrentIndex = jest.fn();
    const mockSetSelectedItemIndex = jest.fn();

    const { getByText } = render(
      <PaginationSection
        currentIndex={mockCurrentIndex}
        setCurrentIndex={mockSetCurrentIndex}
        availablePages={mockAvailablePages}
        setSelectedItemIndex={mockSetSelectedItemIndex}
      />
    );

    const leftButton = getByText('◄');
    const rightButton = getByText('►');

    fireEvent.click(leftButton);
    fireEvent.click(rightButton);

    expect(mockSetCurrentIndex).toHaveBeenCalledTimes(0);
    expect(mockSetSelectedItemIndex).toHaveBeenCalledWith(0);
  });
});
