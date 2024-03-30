import useWrapper from './useWrapper';
import { WrapperProps } from './wrapper.types';

const Wrapper = (props: WrapperProps) => {
  const { getWrapperProps, children } = useWrapper(props);

  return <div {...getWrapperProps()}>{children}</div>;
};

export default Wrapper;
