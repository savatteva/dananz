type TTypographyTag = 'h1' | 'h2' | 'h3' | 'p';
type TTypographyColor = 'mainColor' | 'lightColor' | 'white';
type TTypographyWeight = 'weight700' | 'weight600' | 'regular' | 'weight500';
type TTypographySize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type TTypographyProps = {
  Tag?: TTypographyTag;
  text: string;
  color?: TTypographyColor;
  weight?: TTypographyWeight;
  size?: TTypographySize;
};
