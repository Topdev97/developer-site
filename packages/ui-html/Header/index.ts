import './header.css'
import { createText,TextTags,TextType } from '../Text';
import { createButton,ButtonSizes,ButtonStyles } from '../Button';

export interface HeaderProps {
    title:string;
    subtitle:string;
    buttonText:string;
    CTA:boolean;
    onClick:any
    // CTA?:{
    //     label:string,
    //     link?:string,
    //     onClick:EventListenerObject
    // }
}
  

export const createHeader = ({title,subtitle,buttonText,CTA,onClick}:HeaderProps) => {

    const header = document.createElement("div")
    header.className = ["header"].join(" ")
    const headerTitle = createText({label:title,type:TextType.titleLarge,tag:TextTags.H2})
    headerTitle.classList.add("header__title")
    const headerSubtitle = createText({label:subtitle,type:TextType.titleSmall,tag:TextTags.P})
    headerSubtitle.classList.add("header__subtitle")
    header.append(headerTitle,headerSubtitle)
    if(CTA) {
        const headerButton = createButton({size:ButtonSizes.Large,style:ButtonStyles.filled,label:buttonText})
        headerButton.classList.add("header__button")
        header.append(headerButton)
    }   

    return header
}