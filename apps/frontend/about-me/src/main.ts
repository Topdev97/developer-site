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
} from "../../../../packages/ui-html";
import { config } from "./config";

async function sendMessage(ev: MouseEvent) {
  ev.preventDefault();
  const modalDiv = document.querySelector(".modal");
  // const target = ev.target;
  const { email, message,organization } = form;
  submitMessage.classList.add("button--loading");
  const body = {
    email: email.value,
    organization: organization.value,
    message: message.value,
  };

  const response = await fetch(`${config.serverLessUrl}/message`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok || data.error) {
    submitMessage.classList.remove("button--loading");
    throw new Error(data);
  }
  //   sendNotification({
  //     title: "Mensaje enviado",
  //     message: data.message,
  //   });
  submitMessage.classList.remove("button--loading");
  modalDiv?.classList.remove("active");
  modalDiv?.classList.add("inactive");
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
  label:"Organization",
  required:true,
  name:"organization"
})
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

form.append(emailInput,organizationInput, messageInput, submitMessage);
container.append(form);
const contactButton = document.querySelector("#contact-button");

contactButton?.append(
  createModal({
    label: "Send me a message",
    element: container,
    width: "320px",
  })
);
