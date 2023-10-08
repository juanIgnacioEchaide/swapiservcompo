import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import sinon from 'sinon';
import LoadingComponent from '@/components/atoms/page/Loading';

describe('LoadingComponent', () => {
  it('should render LoadingOutlined component', () => {
    const { container } = render(<LoadingComponent />);

    const loadingIcon = container.querySelector('.anticon-loading');

    expect(loadingIcon).toBeInTheDocument();
  });
});
