import "../../../../packages/ui-html/common/variables.css";
import "../../../../packages/ui-html/common/components.css";
import "./style.css";
import {
  createModal,
  createTextField,
  createTextArea,
  createButton,
  ButtonStyles,
  createContainer,
  NotificationType,
  createCard,
  CardSizes,
  createText,
  TypographyType,
  TypographyColor
} from "../../../../packages/ui-html";
import { messageService } from "./services/message.service";
import { inViewAnimations } from "./animations";
import { projectService } from "./services/project.service";
import { showNotification } from "./utils/notifications";
import { technologies } from "./data/technologies";


async function sendMessage(ev: MouseEvent) {
  ev.preventDefault();
  
  const modalDiv = document.querySelector(".modal");
  const form = formContainer.querySelector("form") as HTMLFormElement
  const submitButton = formContainer.querySelector("button") as HTMLButtonElement
  const { email, message, organization } = form;
  submitButton.classList.add("button--loading");
  const body = {
    email: email.value,
    organization: organization.value,
    message: message.value,
  };
  try {
    await messageService.sendMessage(body);
    submitButton.classList.remove("button--loading");
    modalDiv?.classList.remove("active");
    modalDiv?.classList.add("inactive");
    showNotification({type:NotificationType.SUCCESS,title:"Send succesfull",description:"Your message was send succesfully"})
     
  } catch (error:any) {
    submitButton.classList.remove("button--loading");
    showNotification({type:NotificationType.ERROR,title:"Error",description:`${error.message}`})
  
  }
}
async function createProjects() {
  const projectContainer = document.createElement("div")
  projectContainer.className = "projects-container"
  const projects = await projectService.getProjects()
  const projectsElements = projects.map((project)=>{
    return createCard({
      size:CardSizes.Medium,
      image:project.images[0].url,
      title:project.title,
      description:project.shortDescription,
      link:project.link

    })
  })
  projectContainer.append(...projectsElements)
  document.querySelector("#projects")?.append(projectContainer)
  
}

function createTechnologies() {
  const stackList = document.querySelector("#skills__stack-list")

  const techsContainer = document.createElement("div")
  techsContainer.className = "tech-container"
  const techsEls = technologies.sort((a,b)=>b.knowledgeLevel -a.knowledgeLevel).map((tech)=>{
    const name = createText({label:tech.name,type:TypographyType.bodyLarge,color:TypographyColor.Primary})
    return name
  })
  techsContainer.append(...techsEls)

  
  stackList?.append(techsContainer)
}

function createContactForm() {
  const container = createContainer({ border: false,maxWidth:"450px" });

  const form = document.createElement("form");
  form.className = "contact-form";
  const emailInput = createTextField({
    label: "Email",
    required: true,
    name: "email",
  });
  const organizationInput = createTextField({
    label: "Organization",
    required: true,
    name: "organization",
  });
  const messageInput = createTextArea({
    label: "Message",
    required: false,
    name: "message",
  });
  const submitButton = createButton({
    label: "Send",
    style: ButtonStyles.outlined,
    onClick: sendMessage,
    type: "submit",
  });
  
  form.append(emailInput, organizationInput, messageInput, submitButton);
  container.append(form);
  return container
    
}

const formContainer = createContactForm()
const contactButton = document.querySelector("#contact-button");

contactButton?.append(
  createModal({
    label: "Send me a message",
    element: formContainer,
    maxWidth: "450px",
  })
);


createProjects()
createTechnologies()
inViewAnimations()
