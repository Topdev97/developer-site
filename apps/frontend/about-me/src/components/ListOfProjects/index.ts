import { CardSizes, createCard } from "../../../../../../packages/ui-html";
import { projectService } from "../../services/project.service";
import "./style.css"

export async function createProjects() {
    const projectContainer = document.createElement("div");
    projectContainer.className = "projects-container";
    const projects = await projectService.getProjects();
    const projectsElements = projects.map((project) => {
      return createCard({
        size: CardSizes.Medium,
        image: project.images[0].url,
        title: project.title,
        description: project.shortDescription,
        link: project.link,
      });
    });

  
    projectContainer.append(...projectsElements);
    return projectContainer
  }