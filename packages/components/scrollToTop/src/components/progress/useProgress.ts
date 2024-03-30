import { progressCricle } from './progress.styles';
import { ProgressProps } from './progress.type';

const useProgress = (props: ProgressProps) => {
  const { size, className, value = 0, color } = props;

  const getProgressProps = () => ({
    viewBox: '0 0 120 120',
    className,
  });

  const getProgressCircleProps = () => ({
    className: progressCricle({ size }),
    cx: '60',
    cy: '60',
    r: '54',
    strokeWidth: '8',
    strokeDasharray: '339',
    strokeDashoffset: 339 - (value * 339) / 100,
    style: { stroke: color, fill: 'none' },
  });

  return {
    progressCricle,
    getProgressCircleProps,
    getProgressProps,
  };
};

export default useProgress;
