import "./text-area.css";


export interface TextAreaProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
}

export const createTextArea = ({
  label,
  required = false,
  hidden = false,
}: TextAreaProps) => {

  // Create input fields with labels
  const inputNames = `${label}${required ? " *" : ""}`;
  const inputValues = "";
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("text-area");

  const input = document.createElement("textarea");
  input.classList.add("text-area-field");
  input.setAttribute("value", inputValues);
  input.setAttribute("required", "true");

  const labelElement = document.createElement("label");
  labelElement.classList.add("text-area-label");
  labelElement.textContent = inputNames;

  inputContainer.appendChild(input);
  inputContainer.appendChild(labelElement);

  return inputContainer;
};
