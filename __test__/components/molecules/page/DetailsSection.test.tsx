import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DetailsSection } from '@/components/molecules/page/DetailsSection';

jest.mock('@/components/atoms/page/EntityDetails', () => {
  return function MockEntityDetails(props: any) {
    return <div data-testid="entity-details-mock">{JSON.stringify(props)}</div>;
  };
});

describe('DetailsSection Component', () => {
  it('should render EntityDetails component with correct props and image text', () => {
    const mockData = { name: 'Test Name', description: 'Test Description' };

    const { getByTestId, getByText } = render(<DetailsSection data={mockData} />);

    const entityDetailsMock = getByTestId('entity-details-mock');
    const imageText = getByText('image');

    expect(entityDetailsMock).toBeInTheDocument();
    expect(entityDetailsMock).toHaveTextContent(JSON.stringify(mockData));
    expect(imageText).toBeInTheDocument();
  });
});
