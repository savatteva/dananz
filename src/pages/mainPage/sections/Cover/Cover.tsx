import { useTranslation } from 'react-i18next';
import styles from './Cover.module.css';
import { Typography } from '@components';
import { FC } from 'react';
import { Banner } from '@widgets';
import { bannerElements } from '@pages/mainPage/helpers/consts';

export const Cover: FC = () => {
  const { t } = useTranslation('mainPage');

  return (
    <section className={styles.cover}>
      <div className={styles.cover__heading}>
        <Typography text={t('cover_heading')} size="xl" Tag="h1" weight="weight700" />
      </div>
      <img
        src="/public/assets/main_page/cover_phote.png"
        alt="cover dananz"
        className={styles.cover__img}
      />
      <div className={styles.cover__banner}>
        <Banner elements={bannerElements} />
      </div>
      <div className={styles.cover__sign}>
        <p>{t('currentYear')}</p>
        <p>{t('all_rigths')}</p>
      </div>
    </section>
  );
};
