import { useEffect, useState } from 'react';
import { ProgressProps } from '../progress/progress.type';
import { ScrollToTopProps } from './scrollToTop.types';

const UseScrollToTop = (props: ScrollToTopProps) => {
  const { icon, size = 'md' } = props;

  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.ceil(scrolled));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const showProgress = !hovered && progress < 80;

  const getWrapperProps = () => ({
    bgColor: '#1f2935',
    show: progress > 0 || hovered,
    onClick: progress === 100 ? scrollToTop : undefined,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });

  const getProgressProps = (): ProgressProps => ({
    value: progress,
    color: '#fff',
    size: 'lg',
    className: 'absolute w-full h-full',
  });

  return {
    size,
    icon,
    progress,
    hovered,
    scrollToTop,
    showProgress,
    getWrapperProps,
    getProgressProps,
  };
};

export default UseScrollToTop;
