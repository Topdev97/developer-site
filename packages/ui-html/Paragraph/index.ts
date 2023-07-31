import './paragraph.css'

export interface TagProps {
    backgroundColor?: string;
    label:string;
    tag:string
}
  

export const createElement = ({label,backgroundColor,tag}:TagProps) => {

    const element = document.createElement(tag)
    element.className = "paragraph"
    element.textContent = label
    return element
}