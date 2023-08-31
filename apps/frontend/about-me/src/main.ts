import "charts.css";
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
  createNotification,
  NotificationType,
  createCard,
  CardSizes
} from "../../../../packages/ui-html";
import { messageService } from "./services/message.service";
// import { scrollAnimations } from "./animations";
import { animate } from "motion";
import { projectService } from "./services/project.service";
async function sendMessage(ev: MouseEvent) {
  ev.preventDefault();
  
  const modalDiv = document.querySelector(".modal");
  // const target = ev.target;
  const { email, message, organization } = form;
  submitMessage.classList.add("button--loading");
  const body = {
    email: email.value,
    organization: organization.value,
    message: message.value,
  };
  try {
    await messageService.sendMessage(body);
    submitMessage.classList.remove("button--loading");
    modalDiv?.classList.remove("active");
    modalDiv?.classList.add("inactive");
    const notification = createNotification({type:NotificationType.SUCCESS,title:"Send succesfull",description:"Your message was send succesfully"})
    notification.style.position = "fixed"
    notification.style.top = "9%"
    notification.style.right = "1%"
    notification.style.zIndex = "11"

    document.body.append(notification)
    animate(notification,{x:[600,0]},{
      duration:0.5
    })

    setTimeout(() => {
      animate(notification,{x:600},{
        duration:1.5
      })
      setTimeout(() => {
        notification.remove()
        
      }, 1000);
  
    }, 4500);
  
     
  } catch (error) {
    submitMessage.classList.remove("button--loading");

    const notification = createNotification({type:NotificationType.ERROR,title:"Error",description:"Something went wrong, try later"})
    notification.style.position = "fixed"
    notification.style.top = "9%"
    notification.style.right = "1%"
    notification.style.zIndex = "11"

    document.body.append(notification)
    animate(notification,{x:[600,0]},{
      duration:0.5
    })

    setTimeout(() => {
      animate(notification,{x:600},{
        duration:1.5
      })
      setTimeout(() => {
        notification.remove()
        
      }, 1000);
  
    }, 4500);
  
  }
}

const container = createContainer({ border: false });

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
const submitMessage = createButton({
  label: "Send",
  style: ButtonStyles.outlined,
  onClick: sendMessage,
  type: "submit",
});

form.append(emailInput, organizationInput, messageInput, submitMessage);
container.append(form);
const contactButton = document.querySelector("#contact-button");

contactButton?.append(
  createModal({
    label: "Send me a message",
    element: container,
    width: "320px",
  })
);

async function createProjects() {
  const projectContainer = document.createElement("div")
  projectContainer.className = "projects-container"
  const projects = await projectService.getProjects()
  const projectsElements = projects.map((project)=>{
    return createCard({
      size:CardSizes.Medium,
      image:project.images[0].url,
      title:project.title,
      description:project.shortDescription

    })
  })
  projectContainer.append(...projectsElements)
  document.querySelector("#projects")?.append(projectContainer)
  
}
createProjects()