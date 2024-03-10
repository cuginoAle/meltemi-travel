import styles from './styles.module.css';
const Hr = ({ className = '' }: { className?: string }) => {
  return <div className={`${styles.hr} ${className}`} />;
};

export { Hr };
