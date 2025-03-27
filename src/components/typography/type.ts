type TTypographyTag = "h1" | "h2" | "h3" | "p";
type TTypographyColor = "mainColor" | "lightColor";
type TTypographyWeight = "weight700" | "weight600" | "regular";
type TTypographySize =
  | "littleSize"
  | "regularSize"
  | "size14"
  | "size24"
  | "size36"
  | "size72";

export type TTypographyProps = {
  Tag?: TTypographyTag;
  text: string;
  color?: TTypographyColor;
  weight?: TTypographyWeight;
  size?: TTypographySize;
};
