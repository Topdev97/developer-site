import { pagesContainer } from "./nodes";

export const goTo = (path: string) => {
  window.history.pushState({}, "", path);
  navigation();
};

export const navigation = () => {
  // detect path
  const path = window.location.pathname;

  // search path in element
  let currentPage = pagesContainer?.children.namedItem(path);

  if (!currentPage) {
    goTo("not-found");
  }
  // if !path then search building set path building , !building then set path 404
  else if (currentPage?.classList.contains("building")) {
    goTo("/building");
  } else {
    //render page
    Object.entries(pagesContainer?.children as any).forEach((page: any) => {
      if (page[1] !== currentPage) {
        page[1].classList.add("page-inactive");
      } else {
        page[1].classList.remove("page-inactive");
      }
    });
    scrollTo(0,0)
  }
};

document.querySelectorAll<HTMLAnchorElement>("a.link--internal").forEach((anchor) => {

  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    goTo(anchor.href);
  });
});
