import { render } from '@testing-library/react';

import UseScrollToTop from './useScrollToTop';

describe('UseScrollToTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseScrollToTop />);
    expect(baseElement).toBeTruthy();
  });
});
