import "./navbar-mobile.css"

// reference https://codepen.io/nikkk-me/pen/LYYWexL
export interface NavbarMobileProps {
    logo:string
}


export const createNavbarMobile = ({logo:logoUrl}:NavbarMobileProps) => {

      // Create the main div with class "main"
      const divMain = document.createElement("div");
      divMain.classList.add("main");

      // Create the label element with class "menu-button-wrapper"
      const labelMenuButtonWrapper = document.createElement("label");
      labelMenuButtonWrapper.classList.add("menu-button-wrapper");

      // Create the input element with class "menu-button" inside the label
      const inputMenuButton = document.createElement("input");
      inputMenuButton.classList.add("menu-button");
      inputMenuButton.type = "checkbox";

      // Create the div element with class "icon-wrapper"
      const divIconWrapper = document.createElement("div");
      divIconWrapper.classList.add("icon-wrapper");

      // Create the label element with class "hamburger"
      const labelHamburger = document.createElement("label");
      labelHamburger.classList.add("hamburger");

      // Create the input element with class "hamburger-input" inside the label
      const inputHamburgerInput = document.createElement("input");
      inputHamburgerInput.classList.add("hamburger-input");
      inputHamburgerInput.type = "checkbox";

      // Create three span elements with classes "hamburger-line first", "hamburger-line second", "hamburger-line third"
      const spanFirst = document.createElement("span");
      spanFirst.classList.add("hamburger-line", "first");

      const spanSecond = document.createElement("span");
      spanSecond.classList.add("hamburger-line", "second");

      const spanThird = document.createElement("span");
      spanThird.classList.add("hamburger-line", "third");

      // Append spans and input to the label "hamburger"
      labelHamburger.appendChild(inputHamburgerInput);
      labelHamburger.appendChild(spanFirst);
      labelHamburger.appendChild(spanSecond);
      labelHamburger.appendChild(spanThird);

      // Append label "hamburger" to the div "icon-wrapper"
      divIconWrapper.appendChild(labelHamburger);

      // Create the div element with class "item-list"
      const divItemList = document.createElement("div");
      divItemList.classList.add("item-list");

      // Create and append individual divs with text content to the "item-list" div
      const menuItems = ["About me", "Portfolio", "Contact"];
      menuItems.forEach(itemText => {
        const divMenuItem = document.createElement("div");
        divMenuItem.textContent = itemText;
        divItemList.appendChild(divMenuItem);
      });

      // Append input, icon-wrapper, and item-list to the label "menu-button-wrapper"
      labelMenuButtonWrapper.appendChild(inputMenuButton);
      labelMenuButtonWrapper.appendChild(divIconWrapper);
      labelMenuButtonWrapper.appendChild(divItemList);


        // Append elements to the main div "main"
        divMain.appendChild(labelMenuButtonWrapper);

        // Append the main div "main" to the container
      return divMain
}

// Helper function to create the option div
