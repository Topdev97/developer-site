import { navigation, renderPage } from "./navigation";
import { links, linksExternals, navBar, projectsCarrousel } from "./nodes";
import { projectService } from "./project.service";

window.addEventListener("DOMContentLoaded", renderPage);
const menuClose = navBar.querySelector("input") as HTMLInputElement;

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target: any = event.target;
    navigation(target.href);
  });
});
linksExternals.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    menuClose.checked = false;
    const target: any = event.target;
    setTimeout(() => {
      window.location.href = target.href;
    }, 600);
  });
});

async function loadProjectCarrousel() {
  try {
    const projects = await projectService.getProjects();
    const projectsCard = projects.map((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      const title = document.createElement("h2");
      title.textContent = project.title;
      const shortDescription = document.createElement("p");
      shortDescription.textContent = project.shortDescription;
      const featureImage = document.createElement("img");
      featureImage.alt = project.title;
      featureImage.src = project.images[0].url;
      projectCard.append(title, shortDescription, featureImage);
      if (project.published) {
        const publishedIcon = document.createElement("img");
        publishedIcon.alt = "published";
        projectCard.append(publishedIcon);
      }

      return projectCard;
    });
    projectsCarrousel.append(...projectsCard);
  } catch (error) {

    projectsCarrousel.textContent = `${error}`
  }
}
loadProjectCarrousel();
