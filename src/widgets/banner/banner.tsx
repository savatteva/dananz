import styles from './styles.module.css';

export const Banner = ({ elements }: { elements: TElementBanner[] }) => {
  return (
    <ul className={styles.banner}>
      {elements.map((element) => {
        return (
          <li key={element.mainTitle} className={styles.banner__item}>
            <p className={styles.banner__item_mainTitle}>{element.mainTitle}</p>
            <p className={styles.banner__item_subTitle}>{element.subTitle}</p>
          </li>
        );
      })}
    </ul>
  );
};
