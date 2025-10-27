import { type FC } from 'react';
import styles from './Spinner.module.css';

const Spinner: FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
