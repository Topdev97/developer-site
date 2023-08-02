import './text.css'


export enum TextType {
    titleLarge = "text--title-large",
    titleMedium = "text--title-medium",
    titleSmall = "text--title-small",
    bodyLarge = "text--body-large",
    bodyMedium = "text--body-medium",
    bodySmall = "text--body-small"
}

export interface TextProps {
    label:string;
    type:TextType
}
  

export const createText = ({label,type}:TextProps) => {

    const element = document.createElement("div")
    element.className = ["text",type].join(" ")
    element.textContent = label
    return element
}