import "./slider.css"

export interface SliderProps {
  hidden: boolean;
}

export const createSlider = ({ hidden = false }: SliderProps) => {
  // Create section element
  const carouselSection = document.createElement("section");
  carouselSection.classList.add("carousel");
  carouselSection.setAttribute("aria-label", "Gallery");

  // Create ol element for viewport
  const viewportList = document.createElement("ol");
  viewportList.classList.add("carousel__viewport");

  // Array of slide IDs
  const slideIds = [
    "carousel__slide1",
    "carousel__slide2",
    "carousel__slide3",
    "carousel__slide4",
  ];

  // Create slides and append to viewport list
  slideIds.forEach((slideId, index) => {
    const slide = document.createElement("li");
    slide.id = slideId;
    slide.tabIndex = 0;
    slide.classList.add("carousel__slide");

    const snapper = document.createElement("div");
    snapper.classList.add("carousel__snapper");
    slide.appendChild(snapper);

    const prevLink = document.createElement("a");
    prevLink.href = `#${
      slideIds[(index + slideIds.length - 1) % slideIds.length]
    }`;
    prevLink.classList.add("carousel__prev");
    prevLink.textContent =
      index === 0 ? "Go to last slide" : "Go to previous slide";
    snapper.appendChild(prevLink);

    const nextLink = document.createElement("a");
    nextLink.href = `#${slideIds[(index + 1) % slideIds.length]}`;
    nextLink.classList.add("carousel__next");
    nextLink.textContent =
      index === slideIds.length - 1 ? "Go to first slide" : "Go to next slide";
    snapper.appendChild(nextLink);

    viewportList.appendChild(slide);
  });

  // Append viewport list to section
  carouselSection.appendChild(viewportList);

  // Create aside element for navigation
  const navigationAside = document.createElement("aside");
  navigationAside.classList.add("carousel__navigation");

  // Create ol element for navigation list
  const navigationList = document.createElement("ol");
  navigationList.classList.add("carousel__navigation-list");

  // Create navigation items and append to navigation list
  slideIds.forEach((slideId, index) => {
    const navigationItem = document.createElement("li");
    navigationItem.classList.add("carousel__navigation-item");

    const navigationLink = document.createElement("a");
    navigationLink.href = `#${slideId}`;
    navigationLink.classList.add("carousel__navigation-button");
    navigationLink.textContent = `Go to slide ${index + 1}`;

    navigationItem.appendChild(navigationLink);
    navigationList.appendChild(navigationItem);
  });

  // Append navigation list to aside
  navigationAside.appendChild(navigationList);

  // Append aside to section
  carouselSection.appendChild(navigationAside);

  // Append section to the document body
  return carouselSection;
};
