import styles from './scrollToTop.module.scss';

/* eslint-disable-next-line */
export interface ScrollToTopProps {}

export function ScrollToTop(props: ScrollToTopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ScrollToTop!</h1>
    </div>
  );
}

export default ScrollToTop;
