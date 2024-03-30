import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { wrapper } from './wrapper.styles';

export interface WrapperProps
  extends VariantProps<typeof wrapper>,
    React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}
