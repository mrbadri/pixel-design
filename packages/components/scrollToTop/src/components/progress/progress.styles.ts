import { cva } from 'class-variance-authority';

export const progressCricle = cva(['text-transparent', 'stroke-current'], {
  variants: {
    size: {
      sm: ['stroke-2'],
      md: ['stroke-2'],
      lg: ['stroke-[8px]'],
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
