import type { TTypographyProps } from "./type";
import styles from "./styles.module.css";
import clsx from "clsx";

const Typography = ({
  Tag = "p",
  text,
  color = "mainColor",
  weight = "regular",
  size = "regularSize",
}: TTypographyProps) => {
  return (
    <Tag
      className={clsx(
        styles.typography,
        styles[color],
        styles[weight],
        styles[size],
      )}
    >
      {text}
    </Tag>
  );
};

export default Typography;
