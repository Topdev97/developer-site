import "./slider.css";
import { CardSizes, createCard } from "../Card";
import { gsap } from "gsap";
interface BreakPoint {
  width:number;
  itemsToShow: number;
  itemsToScroll:number
}

export interface SliderProps {
  hidden: boolean;
  elements:HTMLElement[]
  breakpoints?:BreakPoint[];

}

const projects = [
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 1",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 2",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 3",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 4",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 5",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
  {
    description: "lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo lorem qlo ",
    title: "Proyecto test 6",
    image:
      "https://res.cloudinary.com/dxryc5jgr/image/upload/v1682371471/davc93/landing/descarga_3_jd1wj4.jpg",
  },
];

const projectsCards = projects.map((project) => {
  const projectWrapper = document.createElement("div");
  const projectCard = createCard({
    size: CardSizes.Medium,
    description: project.description,
    title: project.title,
    image: project.image,
  });
  projectWrapper.append(projectCard);
  return projectWrapper;
});

const createLeftChevron = () => {
  const leftChevron = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  leftChevron.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  leftChevron.setAttribute(
    "class",
    "icon icon-tabler icon-tabler-chevron-left"
  );
  leftChevron.setAttribute("width", "40");
  leftChevron.setAttribute("height", "40");
  leftChevron.setAttribute("viewBox", "0 0 24 24");
  leftChevron.setAttribute("stroke-width", "1.5");
  leftChevron.setAttribute("stroke", "currentColor");
  leftChevron.setAttribute("fill", "none");
  leftChevron.setAttribute("stroke-linecap", "round");
  leftChevron.setAttribute("stroke-linejoin", "round");

  // Create the path elements
  const leftChevronPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  leftChevronPath1.setAttribute("stroke", "none");
  leftChevronPath1.setAttribute("d", "M0 0h24v24H0z");
  leftChevronPath1.setAttribute("fill", "none");

  const leftChevronPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  leftChevronPath2.setAttribute("d", "M15 6l-6 6l6 6");

  leftChevronPath2.setAttribute("color", "var(--white)");

  // Append the path elements to the SVG
  leftChevron.appendChild(leftChevronPath1);
  leftChevron.appendChild(leftChevronPath2);
  return leftChevron;
};
const createRightChevron = () => {
  const rightChevron = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  rightChevron.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  rightChevron.setAttribute(
    "class",
    "icon icon-tabler icon-tabler-chevron-right"
  );
  rightChevron.setAttribute("width", "40");
  rightChevron.setAttribute("height", "40");
  rightChevron.setAttribute("viewBox", "0 0 24 24");
  rightChevron.setAttribute("stroke-width", "1.5");
  rightChevron.setAttribute("stroke", "currentColor");
  rightChevron.setAttribute("fill", "none");
  rightChevron.setAttribute("stroke-linecap", "round");
  rightChevron.setAttribute("stroke-linejoin", "round");

  // Create the path elements
  const rightChevronPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  rightChevronPath1.setAttribute("stroke", "none");
  rightChevronPath1.setAttribute("d", "M0 0h24v24H0z");
  rightChevronPath1.setAttribute("fill", "none");

  const rightChevronPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  rightChevronPath2.setAttribute("d", "M9 6l6 6l-6 6");

  rightChevronPath2.setAttribute("color", "var(--white)");
  // Append the path elements to the SVG
  rightChevron.appendChild(rightChevronPath1);
  rightChevron.appendChild(rightChevronPath2);
  return rightChevron;
};
const createNavigationPoint = () => {
  // Create SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "icon icon-tabler icon-tabler-point-filled");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "none");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  svg.classList.add("navigation__element");

  // Create background path
  const backgroundPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  backgroundPath.setAttribute("stroke", "none");
  backgroundPath.setAttribute("d", "M0 0h24v24H0z");
  backgroundPath.setAttribute("fill", "none");

  // Create point path
  const pointPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pointPath.setAttribute(
    "d",
    "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783"
  );
  pointPath.setAttribute("stroke-width", "0");
  pointPath.setAttribute("fill", "var(--white)");

  // Append paths to the SVG
  svg.appendChild(backgroundPath);
  svg.appendChild(pointPath);

  // Append SVG to the document
  document.body.appendChild(svg);
  return svg;
};

const nextSlices = (event: MouseEvent) => {
  const sliderItems = document.querySelector(".slider__items");
  gsap.to(sliderItems, {
    x: "-=340px",
    duration: 1,
  });
};

const prevSlices = (event: MouseEvent) => {
  const sliderItems = document.querySelector(".slider__items");
  gsap.to(sliderItems, {
    x: "+=340px",
    duration: 1,
  });
};

const createControls = () => {
  const sliderControls = document.createElement("div");
  sliderControls.className = "slider__controls";
  const leftChevron = createLeftChevron();
  const rightChevron = createRightChevron();
  leftChevron.addEventListener("click", prevSlices);
  rightChevron.addEventListener("click", nextSlices);
  sliderControls.append(leftChevron, rightChevron);

  return sliderControls;
};

export const createSlider = ({ hidden = false,elements = projectsCards }: SliderProps) => {
  const slider = document.createElement("div");
  slider.className = "slider";
  const sliderItemsContainer = document.createElement("div");
  sliderItemsContainer.className = "slider__items-container";

  const sliderItems = document.createElement("div");
  sliderItems.className = "slider__items";
  sliderItems.append(...elements);
  sliderItemsContainer.append(sliderItems);

  const sliderControls = createControls();
  const sliderNavigation = document.createElement("div");
  sliderNavigation.className = "slider__navigation";
  const navigationElements = document.createElement("div");
  navigationElements.className = "navigation__elements";
  const points = projects.map((project, index) => {
    const element = createNavigationPoint();
    element.addEventListener("click", (event) => {
      alert(`Click en slides ${index}`);
    });
    return element;
  });
  navigationElements.append(...points);
  sliderNavigation.append(navigationElements);
  slider.append(sliderItemsContainer, sliderControls, sliderNavigation);

  return slider;
};
