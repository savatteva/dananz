import styles from './styles.module.css';

export const Banner = ({ elements }: { elements: TElementBanner[] }) => {
  return (
    <ul className={styles.banner}>
      {elements.map((element) => {
        return (
          <li>
            <p>{element.mainTitle}</p>
            <p>{element.subTitle}</p>
          </li>
        );
      })}
    </ul>
  );
};
