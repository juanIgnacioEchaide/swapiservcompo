import React, { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ItemListSection } from '@/components/molecules/page/ItemsListSection';
import { SwapiEntity } from '@/models/entities';
import { isPeople } from '@/utils/helpers';

jest.mock('@/app/loading', () => ({
  __esModule: true,
  default: function MockLoading() {
    return <div data-testid="loading-mock">Loading...</div>;
  },
}));

describe('ItemListSection Component', () => {
  it('should render items and handle click events correctly', () => {
    const mockItems = [
      { id: 1, name: 'Person 1' },
      { id: 2, name: 'Person 2' },
    ] as any[];
    const mockSelectedItemIndex = 1;
    const mockSetSelectedItemIndex = jest.fn();

    const { getByText, getByTestId } = render(
      <ItemListSection items={mockItems} selectedItemIndex={mockSelectedItemIndex} setSelectedItemIndex={mockSetSelectedItemIndex} />
    );

    const itemElements = mockItems.map((item) => isPeople(item) && getByText(item?.name)) as unknown as Node[];
    const loadingElement = getByTestId('loading-mock');

    expect(loadingElement).not.toBeInTheDocument();
    expect(itemElements?.length).toBe(mockItems.length);

    fireEvent.click(itemElements[0]);

    expect(mockSetSelectedItemIndex).toHaveBeenCalledWith(0);
  });

  it('should render Loading component when items are not provided', () => {
    const { getByTestId } = render(<ItemListSection items={[]} selectedItemIndex={undefined} setSelectedItemIndex={function (value: React.SetStateAction<number>): void {
        throw new Error('Function not implemented.');
    } } />);
    const loadingElement = getByTestId('loading-mock');

    expect(loadingElement).toBeInTheDocument();
  });
});
