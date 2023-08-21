import "./button.css";
export enum ButtonSizes {
  
  Medium = "medium",
  Large = "large",
}

export enum ButtonStyles {
  filled = "filled",
  outlined = "outlined"
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
  onClick?: () => void;

  loading?: boolean;

  disable?: boolean;
  hidden?: boolean;
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
  onClick,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  if(!loading){

    btn.innerText = label;
  } else {
    btn.append(document.createElement("div"))
  }
  if (onClick) {
    btn.addEventListener("click", onClick);
  }
  

  const mode = style == 'filled'
    ? "button--filled"
    : "button--outlined";
  btn.className = ["button", `button--${size}`, mode, loading ? "button--loading" : "",disable ? "button--disabled" : "", hidden ? "hidden" : ""].join(
    " "
  );

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  return btn;
};
