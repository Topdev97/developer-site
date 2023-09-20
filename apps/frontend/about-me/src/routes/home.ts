import {
  createModal,
  createContainer,
  createTypography,
  TypographySize,
  TypographyColor,
  TypographyWeight,
} from "../../../../../packages/ui-html";
import { technologies } from "../data/technologies";
import { JobsList } from "../data/home";
import { animate, inView, scroll } from "motion";
import {
  contactButtonBottom,
  contactButtonHero,
  jobsList,
  projectList,
  stackList,
} from "../nodes";
import { createProjects } from "../components/ListOfProjects";
import { createContactForm } from "../components/ContactForm";
const projectsEl = await createProjects();
const technologiesEl = createTechnologies();
const formContainer = createContactForm();
const formContainer2 = createContactForm("rgb(0,0,0,0.8)");

function animations() {
  inView(
    ".section",
    ({ target }) => {
      animate(
        target.querySelectorAll(".typography--title-medium"),
        { opacity: 1, transform: "none" },
        { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    },
    { margin: "-150px" }
  );
  inView(
    ".skills",
    ({ target }) => {
      animate(
        target.querySelectorAll(".level"),
        { width: [0, target.clientWidth] },
        { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    },
    { margin: "-150px" }
  );

  scroll(animate(".layer-1", { opacity: 0 }), {
    offset: ["start start", "center center"],
  });
  scroll(animate(".bg-contact", { opacity: 1 }), {
    offset: ["start start", "center center"],
  });
  scroll(animate(".progress-bar", { scaleY: [0, 1] }), {
    offset: ["start start", "end end"],
  });
}

function createTechnologies() {
  const techsContainer = document.createElement("div");
  techsContainer.className = "tech-container";
  const techsEls = technologies
    .sort((a, b) => b.knowledgeLevel - a.knowledgeLevel)
    .map((tech) => {
      const width = 30;

      const container = createContainer({ border: false });
      container.style.display = "flex";
      container.style.padding = "0";
      const level = document.createElement("div");
      level.className = "level";
      level.style.width = `${((100 - width) / 5) * tech.knowledgeLevel}%`;
      level.style.background = "var(--primary_300)";
      const name = createTypography({
        label: tech.name,
        size: TypographySize.bodyLarge,
        color: TypographyColor.White,
      });
      name.style.width = `${width}%`;
      container.append(name, level);
      return container;
    });
  techsContainer.append(...techsEls);
  return techsContainer;
}

function createJobs() {
  const jobsContainer = document.createElement("div");
  jobsContainer.className = "jobs-list";
  const jobsList = JobsList.map((job) => {
    const container = createContainer({});
    container.classList.add("job-card");
    const textContainer = createContainer({ border: false });
    const jobTitle = createTypography({
      label: job.jobTitle,
      weight: TypographyWeight.BOLD,
      size: TypographySize.bodyLarge,
      color: TypographyColor.Primary,
    });
    const organization = createTypography({
      label: job.organization,
      size: TypographySize.bodyLarge,
      color: TypographyColor.White,
    });
    const fromUntil = createTypography({
      label: job.fromUntil,
      size: TypographySize.bodyLarge,
      color: TypographyColor.White,
    });
    textContainer.append(jobTitle, organization, fromUntil);
    const image = document.createElement("img");
    image.src = job.logoUrl;
    image.addEventListener("click", () => {
      window.open(job.link);
    });
    container.append(image, textContainer);
    return container;
  });
  jobsContainer.append(...jobsList);
  return jobsContainer;
}

export const createHomePage = () => {
  jobsList?.append(createJobs());
  contactButtonHero?.append(
    createModal({
      label: "Send me a message",
      element: formContainer,
      width: "90vmin",
    })
  );
  contactButtonBottom?.append(formContainer2);
  projectList?.append(projectsEl);
  stackList?.append(technologiesEl);

  animations();
};
