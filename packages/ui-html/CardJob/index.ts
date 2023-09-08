import { TypographyColor, TypographySize, createTypography } from "../Typography";

export interface CardProps {
  jobTitle: string;
  organization: string;
  fromUntil: string;
  imageUrl: string;
  link?: string;
}

export const createJobCard = ({
  organization,
  jobTitle,
  imageUrl,
  fromUntil,
  link,
}: CardProps) => {
  const card = document.createElement("div");
  card.className = ["card-job"].join(" ");
  
  if (link) {
    card.tabIndex = 0;
    card.classList.add("card--on-click")
    card.addEventListener("click", () => {
      window.open(link, "_self");
    });

  }
  const cardTextContainer = document.createElement("div");
  cardTextContainer.className = "card__text-container";
  const cardJobTitle = createTypography({label:jobTitle,size:TypographySize.bodyLarge,color:TypographyColor.White})
  const cardOrganization = createTypography({label:organization,size:TypographySize.bodyLarge,color:TypographyColor.White})
  const cardFromUntil = createTypography({label:fromUntil,size:TypographySize.bodyLarge,color:TypographyColor.White})

  const imageContainer = document.createElement("div");
  imageContainer.className = "card__image-container";

  const cardImage = document.createElement("img");
  cardImage.className = "card__image";
  cardImage.src = imageUrl;
  cardImage.alt = organization
  imageContainer.append(cardImage);
  cardTextContainer.append(cardJobTitle, cardOrganization,cardFromUntil);
  card.append(imageContainer, cardTextContainer);

  return card;
};
