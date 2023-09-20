
export enum TextFieldInputType {
  TEXT = "text",
  PASSWORD = "password",

}

export interface TextFieldProps {
  hidden?: boolean;
  label: string;
  required?: boolean;
  inputType?: TextFieldInputType;
  name?:string
}

export const createTextField = ({
  label,
  required = false,
  inputType = TextFieldInputType.TEXT,
  name = ""
}: TextFieldProps) => {

  // Create input fields with labels
  const inputNames = `${label}${required ? " *" : ""}`;
  const inputTypes = inputType;
  const inputValues = "";
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input");

  const input = document.createElement("input");
  input.name = name
  input.setAttribute("type", inputTypes);
  input.classList.add("input-field");
  input.setAttribute("value", inputValues);
  if(required){

    input.setAttribute("required", "true");
  }

  const labelElement = document.createElement("label");
  labelElement.classList.add("input-label");
  labelElement.textContent = inputNames;

  inputContainer.appendChild(input);
  inputContainer.appendChild(labelElement);

  return inputContainer;
};
