type TTypographyTag = 'h1' | 'h2' | 'h3' | 'p';
type TTypographyColor = 'mainColor' | 'lightColor' | 'white';
type TTypographyWeight = 'weight700' | 'weight600' | 'regular' | 'weight500';
type TTypographySize = 'size14' | 'size16' | 'size18' | 'size24' | 'size36' | 'size72';

export type TTypographyProps = {
  Tag?: TTypographyTag;
  text: string;
  color?: TTypographyColor;
  weight?: TTypographyWeight;
  size?: TTypographySize;
};
