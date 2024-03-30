import { cva } from 'class-variance-authority';

export const wrapper = cva(
  [
    'fixed',
    'transition-all',
    'transform',
    'flex ',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'rounded-full',
    'z-50',
  ],
  {
    variants: {
      show: {
        true: ['opacity-100', ' scale-100'],
        false: ['opacity-0', ' scale-0'],
      },
      size: {
        sm: ['w-10 ', 'h-10'],
        md: ['w-12 ', 'h-12'],
        lg: ['w-14 ', 'h-14'],
      },
      position: {
        tr: ['top-4', 'right-4'],
        tl: ['top-4', 'left-4'],
        br: ['bottom-4', 'right-4'],
        bl: ['bottom-4', 'left-4'],
      },
    },
    compoundVariants: [
      {
        // intent: 'primary',
        // size: 'medium',
        // class: 'uppercase',
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
      },
    ],
    defaultVariants: {
      size: 'md',
      position: 'br',
      show: true,
    },
  }
);
