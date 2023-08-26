
export enum ButtonSizes {
  Medium = "medium",
  Large = "large",
}

export enum ButtonStyles {
  filled = "button--filled",
  outlined = "button--outlined",
}

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  style?: ButtonStyles;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSizes;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (ev: MouseEvent) => void;

  loading?: boolean;

  disable?: boolean;
  hidden?: boolean;
  type?: "button" | "submit";
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  style = ButtonStyles.filled,
  size = ButtonSizes.Large,
  loading = false,
  disable = false,
  hidden = false,
  backgroundColor,
  label = "Button",
  type = "button",
  onClick,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = type;
  const content = document.createElement("span")
  content.className = "button__content"
  content.textContent = label
  const loader = document.createElement("div");
  loader.className = "button__loader";
  btn.append(content,loader);

  if (onClick) {
    btn.addEventListener("click", onClick);
  }

  btn.className = [
    "button",
    `button--${size}`,
    style,
    loading ? "button--loading" : "",
    disable ? "button--disabled" : "",
    hidden ? "hidden" : "",
  ].join(" ");

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  return btn;
};
