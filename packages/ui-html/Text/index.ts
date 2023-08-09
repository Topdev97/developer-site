import './text.css'


export enum TextType {
    titleLarge =  "text--title-large",
    titleMedium = "text--title-medium",
    titleSmall = "text--title-small",
    bodyLarge = "text--body-large",
    bodyMedium = "text--body-medium",
    bodySmall = "text--body-small",
    listItem = "text--list-item"
}

export enum TextTags {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    P = "p",
    li = "li"
}

export interface TextProps {
    label:string;
    type:TextType
    tag?:TextTags
}
  

export const createText = ({label,type,tag}:TextProps) => {
    
    if(type == TextType.listItem){
        tag = TextTags.li
    }

    const element = document.createElement(tag ? tag : "div")
    element.className = ["text",type].join(" ")
    element.textContent = label
    return element
}