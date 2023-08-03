import './header.css'



export interface HeaderProps {
    title:string;
    subtitle:string;
    CTA?:{
        label:string,
        link?:string,
        onClick:EventListenerObject
    }
}
  

export const createHeader = ({title,subtitle,CTA}:HeaderProps) => {

    const header = document.createElement("div")
    header.className = ["header"].join(" ")
    const headerTitle = document.createElement("div")
    const headerSubtitle = document.createElement("span")
    let headerButton;
    if(CTA && CTA.link){
        headerButton = document.createElement("a")
        headerButton.textContent = CTA.label
        headerButton.href = CTA.link

    } else if (CTA && !CTA.link) {
        headerButton = document.createElement("button")
        headerButton.addEventListener("click",CTA?.onClick as EventListenerObject)
        headerButton.textContent = CTA.label
    }
        
    return header
}