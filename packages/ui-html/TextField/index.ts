import "./text-field.css";

export enum TextFieldInputType {
  TEXT = "text",
  PASSWORD = "password",

}

export interface TextFieldProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
  inputType?: TextFieldInputType;
}

export const createTextField = ({
  label,
  required = false,
  hidden = false,
  inputType = TextFieldInputType.TEXT,
}: TextFieldProps) => {

  // Create input fields with labels
  const inputNames = `${label}${required ? " *" : ""}`;
  const inputTypes = inputType;
  const inputValues = "";
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input");

  const input = document.createElement("input");
  input.setAttribute("type", inputTypes);
  input.classList.add("input-field");
  input.setAttribute("value", inputValues);
  input.setAttribute("required", "true");

  const labelElement = document.createElement("label");
  labelElement.classList.add("input-label");
  labelElement.textContent = inputNames;

  inputContainer.appendChild(input);
  inputContainer.appendChild(labelElement);

  return inputContainer;
};
