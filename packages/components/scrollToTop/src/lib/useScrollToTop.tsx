import styles from './useScrollToTop.module.scss';

/* eslint-disable-next-line */
export interface UseScrollToTopProps {}

export function UseScrollToTop(props: UseScrollToTopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UseScrollToTop!</h1>
    </div>
  );
}

export default UseScrollToTop;
