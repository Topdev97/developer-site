import "./navbar-desktop.css"
// reference https://codepen.io/dmendozaec/pen/vwjRvw
export interface NavbarDesktopProps {
    logo?:string
}



export const createNavbarDesktop = ({logo:logoUrl}:NavbarDesktopProps) => {

      // Create the main div with class "nav"
      const navbarContainer = document.createElement("div")
      navbarContainer.className = ["navbar-container","navbar-desktop"].join(" ")
      const divNav = document.createElement("nav");
      divNav.classList.add("nav");

      // Create the checkbox element
      const inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
 
      // Create the two span elements
      const span1 = document.createElement("span");
      const span2 = document.createElement("span");

      // Create the div with class "menu"
      const divMenu = document.createElement("div");
      divMenu.classList.add("menu");

      // Create the list items and anchor links
      const menuItems = ["About me", "Portfolio", "Contact"];
      menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        divMenu.appendChild(li);
      });

      // Append all elements to the main div
      divNav.appendChild(inputCheckbox);
      divNav.appendChild(span1);
      divNav.appendChild(span2);
      divNav.appendChild(divMenu);

      navbarContainer.append(divNav)
      return navbarContainer
      // Append the main div to the container
 }