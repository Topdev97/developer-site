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
    li = "li",
    a = "a"
}

export interface TextProps {
    label:string;
    type:TextType;
    tag?:TextTags;
    isLink:boolean
}
  

export const createText = ({label,type,tag,isLink}:TextProps) => {
    
    if(type == TextType.listItem){
        tag = TextTags.li
    } else if(isLink){
        tag = TextTags.a
    }

    const element = document.createElement(tag ? tag : "div")
    element.className = ["text",type].join(" ")
    if(isLink){
        element.classList.add("text--link")
    }
    element.textContent = label
    return element
}