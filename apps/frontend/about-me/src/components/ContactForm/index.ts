import { ButtonStyles, NotificationType, createButton, createContainer, createTextArea, createTextField } from "../../../../../../packages/ui-html";
import { messageService } from "../../services/message.service";
import { showNotification } from "../../utils/notifications";


export function createContactForm(background?:string) {
    const container = createContainer({ border: false,background });
  
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
      type: "submit",
      
    });
    
  
    form.append(emailInput, organizationInput, messageInput, submitButton);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const target = event.target as any;
      submitButton.classList.add("button--loading");
      try {
        const body = {
          email: target?.email.value,
          organization: target?.organization.value,
          message: target?.message.value,
        };
  
        await messageService.sendMessage(body);
  
        showNotification({
          type: NotificationType.SUCCESS,
          title: "Send successful",
          description: "Your message was send successfully",
        });
        const modalDiv = document.querySelector(".modal");
        modalDiv?.classList.remove("active");
        modalDiv?.classList.add("inactive");
      } catch (error: any) {
        showNotification({
          type: NotificationType.ERROR,
          title: "Error",
          description: `${error.message}`,
        });
      }
      submitButton.classList.remove("button--loading");
    });
  
    container.append(form);
    return container;
  }