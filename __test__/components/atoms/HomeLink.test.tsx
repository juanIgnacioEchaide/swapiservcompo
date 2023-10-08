import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import sinon from 'sinon';
import { HomeLink } from '@/components/atoms/page/HomeLink';


describe('HomeLink Component', () => {
  it('should handle mouse events and route correctly', () => {
    const route = '/some-route';
    const title = 'Test Title';
    const imageUrl = '/test-image.jpg';

    const { getByText, getByAltText } = render(<HomeLink title={title} imageUrl={imageUrl} route={route} />);

    const linkElement = getByText(title);
    const imageElement = getByAltText(title);

    fireEvent.mouseEnter(linkElement);
    fireEvent.mouseLeave(linkElement);

    expect(linkElement).toHaveStyle('top: -5%');

    fireEvent.click(linkElement);

    // Mocking Link component and its behavior
    const linkMock = sinon.stub(require('next/link'), 'default');
    linkMock.callsFake(({ children }: any) => children({ href: route }));

    expect(linkMock.calledWithMatch({ href: route })).toBe(true);

    linkMock.restore();
  });
});
