import clsx from "clsx";
import styles from "./styles.module.css";
import type { TButtonProps } from "./type";

const Button = ({ variant, children, onClick }: TButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
