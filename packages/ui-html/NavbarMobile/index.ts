import "./navbar-desktop.css"

export interface NavbarMobileProps {
    logo:string
}

const createOption = (title:any, japanese:any, roman:any) => {
  const divOption = document.createElement("div");
  divOption.classList.add("option");

  const svgFood = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgFood.classList.add("food");
  svgFood.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgFood.setAttribute("height", "100");
  svgFood.setAttribute("width", "100");
  svgFood.setAttribute("viewBox", "0 0 100 100");
  svgFood.setAttribute("data-name", "Camada 1");

  // Replace this URL with the appropriate path to your SVG
  const titleElement = document.createElement("title");
  titleElement.textContent = title;

  // Add your SVG path data here or use the appropriate URL
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M..."); // Add your SVG path data here

  // Append title and path to the SVG
  svgFood.appendChild(titleElement);
  svgFood.appendChild(path);

  const divJapanese = document.createElement("div");
  divJapanese.classList.add("japanese");
  divJapanese.textContent = japanese;

  const divRoman = document.createElement("div");
  divRoman.classList.add("roman");
  divRoman.textContent = roman;

  // Append all elements to the "option" div
  divOption.appendChild(svgFood);
  divOption.appendChild(divJapanese);
  divOption.appendChild(divRoman);

  return divOption;
}



export const createNavbarMobile = ({logo:logoUrl}:NavbarMobileProps) => {
  // Create the main div with class "phone-frame"
  const divPhoneFrame = document.createElement("div");
  divPhoneFrame.classList.add("phone-frame","navbar-mobile");

  // Create the div with class "phone-screen"
  const divPhoneScreen = document.createElement("div");
  divPhoneScreen.classList.add("phone-screen");

  // Create the div with class "imageContainer"
  const divImageContainer = document.createElement("div");
  divImageContainer.classList.add("imageContainer");

  // Create the image element
  // const img = document.createElement("img");
  // img.classList.add("image");
  // img.src = "https://plus.unsplash.com/premium_photo-1674671748477-5354897d35c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

  // Create the div with class "overlay"
  const divOverlay = document.createElement("div");
  divOverlay.classList.add("overlay");

  // Append image and overlay to the "imageContainer" div
  // divImageContainer.appendChild(img);
  divImageContainer.appendChild(divOverlay);

  // Create the SVG element for the button-menu
  const svgButtonMenu = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgButtonMenu.classList.add("button-menu", "button-menu1");
  svgButtonMenu.setAttribute("height", "24");
  svgButtonMenu.setAttribute("width", "24");
  svgButtonMenu.setAttribute("onclick", "document.querySelector('.phone-screen').classList.toggle('active')");

  // Create the circle element inside the SVG
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.classList.add("bg");
  circle.setAttribute("r", "12");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");

  // Create the path elements inside the SVG
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.classList.add("line", "line1");
  path1.setAttribute("d", "M 6,8 H 18");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.classList.add("line", "line2");
  path2.setAttribute("d", "M 6,12 H 18");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.classList.add("line", "line3");
  path3.setAttribute("d", "M 6,16 H 18");

  // Append circle and paths to the SVG
  svgButtonMenu.appendChild(circle);
  svgButtonMenu.appendChild(path1);
  svgButtonMenu.appendChild(path2);
  svgButtonMenu.appendChild(path3);

  // Create the div with class "menu" and onclick event
  const divMenu = document.createElement("div");
  divMenu.classList.add("menu");
  divMenu.setAttribute("onclick", "document.querySelector('.phone-screen').classList.remove('active')");

  // Create the option divs with their content
  const option1 = createOption("Sushi", "にぎり", "Nigiri");
  const option2 = createOption("Sushi_2", "細巻き", "Hosomaki");
  const option3 = createOption("Tempura_1", "天ぷら", "Tempura");

  // Append options to the "menu" div
  divMenu.appendChild(option1);
  divMenu.appendChild(option2);
  divMenu.appendChild(option3);

  // Append elements to the main div "phone-screen"
  divPhoneScreen.appendChild(divImageContainer);
  divPhoneScreen.appendChild(svgButtonMenu);
  divPhoneScreen.appendChild(divMenu);

  // Append the main div "phone-screen" to the "phone-frame" div
  divPhoneFrame.appendChild(divPhoneScreen);

  // Append the "phone-frame" div to the container
  return divPhoneFrame
}

// Helper function to create the option div
