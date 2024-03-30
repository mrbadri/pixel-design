import { VariantProps } from 'class-variance-authority';
import { progressCricle } from './progress.styles';

export interface ProgressProps extends VariantProps<typeof progressCricle> {
  value?: number;
  color?: string;
  className?: string;
}
