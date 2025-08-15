import { FC } from 'react';
import { Cover } from './sections';

import styles from './styles.module.css';
const MainPage: FC = () => {
  return (
    <main className={styles.main}>
      <Cover />
    </main>
  );
};

export default MainPage;
