import { cva } from 'class-variance-authority';

export const wrapper = cva(
  [
    'pd--scroll-to-top--wrapper',
    'fixed',
    'transition-all',
    'delay-50',
    'transform',
    'flex ',
    'z-50',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'rounded-full',
    'font-bold',
  ],
  {
    variants: {
      show: {
        true: ['opacity-100', ' scale-100'],
        false: ['opacity-0', ' scale-0'],
      },
      size: {
        sm: ['w-10', 'h-10', 'text-[10px]'],
        md: ['w-12', 'h-12', 'text-xs'],
        lg: ['w-14', 'h-14', 'text-sm'],
      },
      position: {
        tr: ['top-4', 'right-4'],
        tl: ['top-4', 'left-4'],
        br: ['bottom-4', 'right-4'],
        bl: ['bottom-4', 'left-4'],
      },
    },

    defaultVariants: {
      size: 'md',
      position: 'br',
      show: true,
    },
  }
);
