import { ReactNode } from "react";

type TButtonVariant = "primary" | "outline" | "whiteButton";

export type TButtonProps = {
  children: string | ReactNode;
  variant: TButtonVariant;
};
