

function renderPage() {
  // detect path
  let currentPage: string | undefined;
  const path = window.location.pathname;

  const pages = document.querySelectorAll("#pages > *");

  // comparing pages with path

  pages.forEach((page) => {
    if (page.classList.contains(path)) {
      currentPage = path;

      // console.log({'Page':currentPage})
      // console.log(currentPage)
    }
  });
  if (!currentPage) {
    currentPage = "/not-found";
  }

  // add class inactive
  pages.forEach((node) => {
    if (!node.classList.contains(currentPage as string)) {
      node.classList.add("inactive");
    } else {
      node.classList.remove("inactive");
    }
  });
}

function navigation(path: string) {
  
  window.history.pushState({}, "", path);
  renderPage();
}
export { renderPage, navigation };
