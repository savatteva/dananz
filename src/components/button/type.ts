import { ReactNode } from 'react';

type TButtonVariant = 'primary' | 'outline' | 'whiteButton' | 'solid';

export type TButtonProps = {
  children?: string | ReactNode;
  variant?: TButtonVariant;
  onClick?: () => void;
};
