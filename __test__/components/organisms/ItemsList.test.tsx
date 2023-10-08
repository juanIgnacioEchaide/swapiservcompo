import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemsList from '@/components/organisms/items-list/ItemsList';
import { SwapiEntity } from '@/models/entities';

jest.mock('./ItemList.css', () => ({
  itemsListContainer: 'items-list-container',
}));

jest.mock('@/components/molecules/page/DetailsSection', () => ({
  DetailsSection: jest.fn(() => <div data-testid="details-section-mock"></div>),
}));

jest.mock('@/components/molecules/page/ItemsListSection', () => ({
  ItemListSection: jest.fn(() => <div data-testid="item-list-section-mock"></div>),
}));

jest.mock('@/components/molecules/page/PaginationSection', () => ({
  PaginationSection: jest.fn(() => <div data-testid="pagination-section-mock"></div>),
}));

describe('ItemsList Component', () => {
  it('should render child components correctly', () => {
    const mockItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]as unknown as SwapiEntity[];
    const mockSelectedItem = { id: 1, name: 'Item 1' } as unknown as SwapiEntity;
    const mockAvailablePages = 2;
    const mockCurrentIndex = 1;
    const mockSetCurrentIndex = jest.fn();
    const mockSetSelectedItemIndex = jest.fn();

    const { getByTestId } = render(
      <ItemsList
        items={mockItems}
        availablePages={mockAvailablePages}
        selectedItem={mockSelectedItem}
        currentIndex={mockCurrentIndex}
        setCurrentIndex={mockSetCurrentIndex}
        selectedItemIndex={0}
        setSelectedItemIndex={mockSetSelectedItemIndex}
      />
    );

    expect(getByTestId('details-section-mock')).toBeInTheDocument();
    expect(getByTestId('item-list-section-mock')).toBeInTheDocument();
    expect(getByTestId('pagination-section-mock')).toBeInTheDocument();
  });
});
