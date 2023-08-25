import "./modal.css";
import { createButton, ButtonStyles, ButtonSizes } from "../Button";
import type { ButtonProps } from "../Button";
export interface ModalProps extends ButtonProps {
  hidden?: boolean;
  width?:string;
  heigth?:string;
  element?:HTMLElement;
}

const closeIcon = () => {
  // Create the SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("class", "icon icon-tabler icon-tabler-x");
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("stroke-width", "1");
  svgElement.setAttribute("stroke", "currentColor");
  svgElement.setAttribute("fill", "none");
  svgElement.setAttribute("stroke-linecap", "round");
  svgElement.setAttribute("stroke-linejoin", "round");

  // Create the first path element
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("stroke", "none");
  path1.setAttribute("d", "M0 0h24v24H0z");
  path1.setAttribute("fill", "none");
  svgElement.appendChild(path1);

  // Create the second path element
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M18 6l-12 12");
  svgElement.appendChild(path2);

  // Create the third path element
  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M6 6l12 12");
  svgElement.appendChild(path3);

  // Append the SVG element to the body of the HTML document
  return svgElement;
};

const createElement = () => {
  const element = document.createElement("div");
  // Create the image element inside the modal
  const modalImage = document.createElement("img");
  modalImage.src = "https://assets.codepen.io/1462889/sl3.jpg";
  modalImage.alt = "";

  // Create the paragraph inside the modal
  const modalParagraph = document.createElement("p");
  modalParagraph.textContent = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
  element.append(modalImage,modalParagraph)
  return element;
};


export const createModal = ({element = createElement(),width = "375px",heigth = "auto",label = "button",style = ButtonStyles.outlined}: ModalProps) => {
  const button = createButton({
    label,
    style
  });
  button.classList.add("modal-btn");
  button.addEventListener("click", () => {
    modalDiv.classList.remove("inactive");

    modalDiv.classList.add("active");
  });
  // return createButton(modalProps)
  // Create the main container div
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  // Create the modal container
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal inactive";

  const closeModal = closeIcon();
  closeModal.classList.add("modal__close-icon");
  closeModal.addEventListener("click", () => {
    modalDiv.classList.remove("active");
    modalDiv.classList.add("inactive");
  });

  // Create the modal wrapper
  const modalWrapDiv = document.createElement("div");
  modalWrapDiv.className = "modal-wrap";
  modalWrapDiv.style.width = width
  modalWrapDiv.style.height = heigth
  // Append the image and paragraph to the modal wrapper
  element.classList.add("modal__element")
  modalWrapDiv.appendChild(element);

  // Append the modal wrapper to the modal container
  modalDiv.append(modalWrapDiv, closeModal);

  // Append all elements to the main container div
  modalContainer.appendChild(button);
  modalContainer.appendChild(modalDiv);

  // Append the main container div to the body of the HTML document
  return modalContainer;
};
