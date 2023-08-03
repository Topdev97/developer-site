import './card.css'


export enum CardSize {
    Small = "card--small",
    Medium = "card--medium"
}

export interface CardProps {
    title:string;
    description:string;
    size:CardSize;
    image:string
}
  

export const createCard = ({size,description,title,image}:CardProps) => {

    const card = document.createElement("div")
    card.className = ["card",size].join(" ")
    const cardTextContainer = document.createElement("div")
    cardTextContainer.className = "card__text-container"
    const cardTitle = document.createElement("span")
    cardTitle.className = "card__title"
    cardTitle.textContent = title
    const cardDescription = document.createElement("span")
    cardDescription.className = "card__description"
    cardDescription.textContent = description
    const cardImage = document.createElement("img")
    cardImage.className = "card__image"
    cardImage.src = image
    cardTextContainer.append(cardTitle,cardDescription)
    card.append(cardImage,cardTextContainer)
    
    return card
}