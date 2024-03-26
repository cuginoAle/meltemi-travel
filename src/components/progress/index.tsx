import style from './style.module.css';

interface Props {
  isRunning?: boolean;
  interval?: number;
  className?: string;
  onComplete: () => void;
}
const Progress = ({
  isRunning = false,
  interval = 5000,
  className,
  onComplete,
}: Props) => {
  return (
    <svg
      style={
        {
          '--animationDuration': interval + 'ms',
        } as React.CSSProperties
      }
      className={className}
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <circle cx="50%" cy="50%" r="8" className={style.circle__progress__bg} />

      <circle
        onAnimationIteration={onComplete}
        style={{
          animationName: isRunning ? style.progress : 'none',
          animationDuration: interval + 'ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        }}
        cx="50%"
        cy="50%"
        r="8"
        className={style.circle__progress}
      />
    </svg>
  );
};

export { Progress };
