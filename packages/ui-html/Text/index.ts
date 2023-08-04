import './text.css'


export enum TextType {
    titleLarge = "text--title-large",
    titleMedium = "text--title-medium",
    titleSmall = "text--title-small",
    bodyLarge = "text--body-large",
    bodyMedium = "text--body-medium",
    bodySmall = "text--body-small"
}

export enum TextTags {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    P = "p"
}

export interface TextProps {
    label:string;
    type:TextType
    tag?:TextTags
}
  

export const createText = ({label,type,tag}:TextProps) => {

    const element = document.createElement(tag ? tag : "div")
    element.className = ["text",type].join(" ")
    element.textContent = label
    return element
}