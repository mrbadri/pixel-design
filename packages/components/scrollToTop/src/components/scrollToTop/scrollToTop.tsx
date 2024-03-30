import { ArrowUp } from '@pixel-design/icon';
import Progress from '../progress/progress';
import Wrapper from '../wrapper/wrapper';
import { ScrollToTopProps } from './scrollToTop.types';
import UseScrollToTop from './useScrollToTop';
import clsx from 'clsx';

export function ScrollToTop(props: ScrollToTopProps) {
  const {
    size = 'md',
    progress,
    icon,
    showProgress,
    getWrapperProps,
    getProgressProps,
  } = UseScrollToTop(props);

  return (
    <Wrapper {...getWrapperProps()}>
      {showProgress ? (
        progress
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <ArrowUp size={28} />
        </div>
      )}
      {''}
      {<Progress {...getProgressProps()} />}
    </Wrapper>
  );
}

export default ScrollToTop;
