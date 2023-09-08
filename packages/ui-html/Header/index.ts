import { createTypography,TypographyTag,TypographySize } from '../Typography';
import { createButton,ButtonSizes,ButtonStyles } from '../Button';

export interface HeaderProps {
    title:string;
    subtitle:string;
    buttonText:string;
    CTA:boolean;
    // onClick?:any
    // CTA?:{
    //     label:string,
    //     link?:string,
    //     onClick:EventListenerObject
    // }
}
  

export const createHeader = ({title,subtitle,buttonText,CTA}:HeaderProps) => {

    const header = document.createElement("div")
    header.className = ["header"].join(" ")
    const headerTitle = createTypography({label:title,size:TypographySize.titleLarge,tag:TypographyTag.H2})
    headerTitle.classList.add("header__title")
    const headerSubtitle = createTypography({label:subtitle,size:TypographySize.titleSmall,tag:TypographyTag.P})
    headerSubtitle.classList.add("header__subtitle")
    header.append(headerTitle,headerSubtitle)
    if(CTA) {
        const headerButton = createButton({size:ButtonSizes.Large,style:ButtonStyles.filled,label:buttonText})
        headerButton.classList.add("header__button")
        header.append(headerButton)
    }   

    return header
}