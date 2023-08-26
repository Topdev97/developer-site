
export enum TypographyType {
  titleLarge = "typography--title-large",
  titleMedium = "typography--title-medium",
  titleSmall = "typography--title-small",
  bodyLarge = "typography--body-large",
  bodyMedium = "typography--body-medium",
  bodySmall = "typography--body-small",
  listItem = "typography--list-item",
  link = "typography--link",
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
  type: TypographyType;
  tag?: TypographyTag;
  color?: TypographyColor;
}

export const createText = ({
  label,
  type,
  color = TypographyColor.White,
  tag = TypographyTag.span,
}: TypographyProps) => {
  if (type == TypographyType.listItem) {
    tag = TypographyTag.li;
  }

  const element = document.createElement(tag);
  element.className = ["typography", type,color].join(" ");
  element.textContent = label;
  return element;
};
