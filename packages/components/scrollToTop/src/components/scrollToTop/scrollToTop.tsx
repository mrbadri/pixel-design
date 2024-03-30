import Wrapper from '../wrapper/wrapper';
import UseScrollToTop from './useScrollToTop';

/* eslint-disable-next-line */
export interface ScrollToTopProps {}

export function ScrollToTop(props: ScrollToTopProps) {
  const { progress, hovered, handleMouseEnter, handleMouseLeave, scrollToTop } =
    UseScrollToTop();

  return (
    <Wrapper
      bgColor="blue"
      show={progress > 0 || hovered}
      onClick={progress === 100 ? scrollToTop : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {progress}
    </Wrapper>
  );
}

export default ScrollToTop;
