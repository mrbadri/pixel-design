import React, { ReactNode } from 'react';

import { wrapper } from './wrapper.styles';
import type { VariantProps } from 'class-variance-authority';

/* eslint-disable-next-line */
export interface WrapperProps
  extends VariantProps<typeof wrapper>,
    React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Wrapper = (props: WrapperProps) => {
  const {
    children,
    className,
    position,
    show,
    size,
    bgColor = 'blue',
    textColor = '#fff',
    ...divElementProps
  } = props;

  return (
    <div
      className={wrapper({ className, position, show, size })}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      {...divElementProps}
    >
      {children}
    </div>
  );
};

export default Wrapper;
