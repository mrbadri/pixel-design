import { render } from '@testing-library/react';

import ScrollToTop from './scrollToTop';

describe('ScrollToTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollToTop />);
    expect(baseElement).toBeTruthy();
  });
});
