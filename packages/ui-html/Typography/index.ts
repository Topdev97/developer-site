
export enum TypographySize {
  titleLarge = "typography--title-large",
  titleMedium = "typography--title-medium",
  titleSmall = "typography--title-small",
  bodyLarge = "typography--body-large",
  bodySmall = "typography--body-small",
}
export enum TypographyWeight {
  LIGHT="",
  REGULAR="",
  MEDIUM="",
  BOLD=""
}
export enum TypographyTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  P = "p",
  li = "li",
  a = "a",
  span = "span",
}

export enum TypographyColor {
    White = "typography--white",
    Dark = "typography--dark",
    Primary = "typography--primary",
}

export interface TypographyProps {
  label: string;
  size: TypographySize;
  weight?:TypographyWeight;
  tag?: TypographyTag;
  color?: TypographyColor;
}

export const createTypography = ({
  label,
  size,
  weight = TypographyWeight.REGULAR ,
  color = TypographyColor.White,
  tag = TypographyTag.span,
}: TypographyProps) => {

  const element = document.createElement(tag);
  element.className = ["typography", size,color].join(" ");
  element.textContent = label;
  return element;
};
