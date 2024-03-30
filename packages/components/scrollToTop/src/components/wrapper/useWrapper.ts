import { wrapper } from './wrapper.styles';
import { WrapperProps } from './wrapper.types';

const useWrapper = (props: WrapperProps) => {
  const {
    children,
    className,
    position,
    show,
    size,
    bgColor = '#1f2935',
    textColor = '#fff',
    ...divElementProps
  } = props;

  const getWrapperProps = () => ({
    className: wrapper({ className, position, show, size }),
    style: {
      backgroundColor: bgColor,
      color: textColor,
    },
    ...divElementProps,
  });

  return { getWrapperProps, wrapper, children };
};

export default useWrapper;
