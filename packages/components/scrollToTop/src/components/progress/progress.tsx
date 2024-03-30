import { ProgressProps } from './progress.type';
import useProgress from './useProgress';

const Progress = (props: ProgressProps) => {
  const { getProgressProps, getProgressCircleProps } = useProgress(props);

  return (
    <svg {...getProgressProps()}>
      <circle {...getProgressCircleProps()} />
    </svg>
  );
};

export default Progress;
