import "./slider.css";
import { CardSizes, createCard } from "../Card";

export interface SliderProps {
  hidden: boolean;
}

const projects = [
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg"
  
  }

]


const projectsCards = projects.map((project)=>{
  return createCard({
    size: CardSizes.Medium,
    description: project.description,
    title: project.title,
    image:project.image
  });
})

const createSliderElements = () => {
  // Array of slide IDs

  // Create ol element for viewport
  const viewportList = document.createElement("ol");
  viewportList.classList.add("carousel__viewport");
   projectsCards.forEach((projectCard, index) => {
    const slide = document.createElement("li");
    slide.append(projectCard)
    slide.id = `carousel__slide${index}`;
    slide.tabIndex = 0;
    slide.classList.add("carousel__slide");

    const snapper = document.createElement("div");
    snapper.classList.add("carousel__snapper");
    slide.appendChild(snapper);

    const prevLink = document.createElement("a");
    prevLink.href = `#carousel__slide${
      (index + projectsCards.length - 1) % projectsCards.length
    }`;
    prevLink.classList.add("carousel__prev");
    prevLink.textContent =
      index === 0 ? "Go to last slide" : "Go to previous slide";
    snapper.appendChild(prevLink);

    const nextLink = document.createElement("a");
    nextLink.href = `#carousel__slide${[(index + 1) % projectsCards.length]}`;
    nextLink.classList.add("carousel__next");
    nextLink.textContent =
      index === projectsCards.length - 1 ? "Go to first slide" : "Go to next slide";
    snapper.appendChild(nextLink);

    viewportList.appendChild(slide);
  });
  return viewportList;
};

const createSliderList = () => {
  // Create ol element for navigation list
  const navigationList = document.createElement("ol");
  navigationList.classList.add("carousel__navigation-list");

  // Create navigation items and append to navigation list
  projectsCards.forEach((slideId, index) => {
    const navigationItem = document.createElement("li");
    navigationItem.classList.add("carousel__navigation-item");

    const navigationLink = document.createElement("a");
    navigationLink.href = `#carousel__slide${index}`;
    navigationLink.classList.add("carousel__navigation-button");
    navigationLink.textContent = `Go to slide ${index + 1}`;

    navigationItem.appendChild(navigationLink);
    navigationList.appendChild(navigationItem);
  });
  return navigationList;
};

export const createSlider = ({ hidden = false }: SliderProps) => {
  // Create section element
  const carouselSection = document.createElement("section");
  carouselSection.classList.add("carousel");
  carouselSection.setAttribute("aria-label", "Gallery");

  // Append viewport list to section
  carouselSection.appendChild(createSliderElements());

  // Create aside element for navigation
  const navigationAside = document.createElement("aside");
  navigationAside.classList.add("carousel__navigation");

  // Append navigation list to aside
  navigationAside.appendChild(createSliderList());

  // Append aside to section
  carouselSection.appendChild(navigationAside);

  // Append section to the document body
  return carouselSection;
};
