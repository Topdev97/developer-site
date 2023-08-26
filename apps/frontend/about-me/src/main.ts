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
} from "../../../../packages/ui-html";
// import { config } from "./config";

async function sendMessage(ev: MouseEvent) {
  ev.preventDefault();
  const modalDiv = document.querySelector(".modal");
  // const target = ev.target;
  // const { email, message } = form;
  submitMessage.classList.add("button--loading");
  // const body = {
  //   email: email.value,
  //   message: message.value,
  // };

  //   const response = await fetch(`${config.apiUrl}/message`, {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //   });
  //   const data = await response.json();
  //   if (!response.ok || data.error) {
  //     throw new Error(data);
  //   }
  //   sendNotification({
  //     title: "Mensaje enviado",
  //     message: data.message,
  //   });

  setTimeout(() => {
    submitMessage.classList.remove("button--loading");
    modalDiv?.classList.remove("active");
    modalDiv?.classList.add("inactive");
    
  }, 3000);
}

const container = document.createElement("div");
container.className = "container";

const form = document.createElement("form");
form.className = "contact-form";
const emailInput = createTextField({
  label: "Email",
  required: true,
  name: "email",
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

form.append(emailInput, messageInput, submitMessage);
container.append(form);
const contactButton = document.querySelector("#contact-button");

contactButton?.append(
  createModal({
    label: "Send me a message",
    element: container,
    width: "320px",
  })
);
