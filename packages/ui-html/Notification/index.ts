import { createContainer } from "../Container";
import { createText, TypographyType } from "../Typography";
const warningIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "48px");
  svg.setAttribute("viewBox", "0 0 512 512");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("fill", "");

  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1.setAttribute("id", "SVGRepo_bgCarrier");
  g1.setAttribute("stroke-width", "0");
  svg.appendChild(g1);

  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2.setAttribute("id", "SVGRepo_tracerCarrier");
  g2.setAttribute("stroke-linecap", "round");
  g2.setAttribute("stroke-linejoin", "round");
  svg.appendChild(g2);

  const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3.setAttribute("id", "SVGRepo_iconCarrier");
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = "warning";
  g3.appendChild(title);

  const g4 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g4.setAttribute("id", "Page-1");
  g4.setAttribute("stroke", "none");
  g4.setAttribute("stroke-width", "1");
  g4.setAttribute("fill", "none");
  g4.setAttribute("fill-rule", "evenodd");

  const g5 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g5.setAttribute("id", "add");
  g5.setAttribute("fill", "var(--warning-300)");
  g5.setAttribute("transform", "translate(32.000000, 42.666667)");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M225.144334,42.6739678 L42.6666667,362.009885 L407.622001,362.009885 L225.144334,42.6739678 Z M224,272 C239.238095,272 250.666667,283.264 250.666667,298.624 C250.666667,313.984 239.238095,325.248 224,325.248 C208.415584,325.248 197.333333,313.984 197.333333,298.282667 C197.333333,283.264 208.761905,272 224,272 Z M245.333333,106.666667 L245.333333,234.666667 L202.666667,234.666667 L202.666667,106.666667 L245.333333,106.666667 Z"
  );
  path.setAttribute("id", "Combined-Shape");
  g5.appendChild(path);

  g4.appendChild(g5);
  g3.appendChild(g4);
  svg.appendChild(g3);

  return svg;
};
const errorIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "var(--error-300)");
  svg.setAttribute("width", "48px");
  svg.setAttribute("viewBox", "-3.5 0 19 19");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.classList.add("cf-icon-svg");

  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1.setAttribute("id", "SVGRepo_bgCarrier");
  g1.setAttribute("stroke-width", "0");
  svg.appendChild(g1);

  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2.setAttribute("id", "SVGRepo_tracerCarrier");
  g2.setAttribute("stroke-linecap", "round");
  g2.setAttribute("stroke-linejoin", "round");
  svg.appendChild(g2);

  const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3.setAttribute("id", "SVGRepo_iconCarrier");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"
  );
  g3.appendChild(path);

  svg.appendChild(g3);

  return svg;
};

const successIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "48px");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "var(--info-300)");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1.setAttribute("id", "SVGRepo_bgCarrier");
  g1.setAttribute("stroke-width", "0");
  svg.appendChild(g1);

  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2.setAttribute("id", "SVGRepo_tracerCarrier");
  g2.setAttribute("stroke-linecap", "round");
  g2.setAttribute("stroke-linejoin", "round");
  svg.appendChild(g2);

  const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3.setAttribute("id", "SVGRepo_iconCarrier");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("fill-rule", "evenodd");
  path1.setAttribute("clip-rule", "evenodd");
  path1.setAttribute("d", "M4 4H20V20H4V4ZM5.5 5.5V18.5H18.5V5.5H5.5Z");
  path1.setAttribute("fill", "var(--success-300)");
  g3.appendChild(path1);

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("fill-rule", "evenodd");
  path2.setAttribute("clip-rule", "evenodd");
  path2.setAttribute("d", "M11.25 16V11.0562H12.75V16H11.25Z");
  path2.setAttribute("fill", "var(--success-300)");
  g3.appendChild(path2);

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M11 8H13V10H11V8Z");
  path3.setAttribute("fill", "var(--success-300)");
  g3.appendChild(path3);

  svg.appendChild(g3);
  return svg;
};

const infoIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "48px");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "var(--info-300)");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g1.setAttribute("id", "SVGRepo_bgCarrier");
  g1.setAttribute("stroke-width", "0");
  svg.appendChild(g1);

  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g2.setAttribute("id", "SVGRepo_tracerCarrier");
  g2.setAttribute("stroke-linecap", "round");
  g2.setAttribute("stroke-linejoin", "round");
  svg.appendChild(g2);

  const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g3.setAttribute("id", "SVGRepo_iconCarrier");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("fill-rule", "evenodd");
  path1.setAttribute("clip-rule", "evenodd");
  path1.setAttribute("d", "M4 4H20V20H4V4ZM5.5 5.5V18.5H18.5V5.5H5.5Z");
  path1.setAttribute("fill", "var(--info-300)");
  g3.appendChild(path1);

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("fill-rule", "evenodd");
  path2.setAttribute("clip-rule", "evenodd");
  path2.setAttribute("d", "M11.25 16V11.0562H12.75V16H11.25Z");
  path2.setAttribute("fill", "var(--info-300)");
  g3.appendChild(path2);

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M11 8H13V10H11V8Z");
  path3.setAttribute("fill", "var(--info-300)");
  g3.appendChild(path3);

  svg.appendChild(g3);

  return svg;
};

export enum NotificationType {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
}
export interface NotificationProps {
  type: NotificationType;
  title: string;
  description: string;
}

export const createNotification = ({
  type,
  title,
  description,
}: NotificationProps) => {
  const notificationIcon = {
    warning: warningIcon(),
    error: errorIcon(),
    success: successIcon(),
    info: infoIcon(),
  };

  const notification = document.createElement("div");
  notification.className = "notification";
  const icon = notificationIcon[type];
  const textContainer = document.createElement("div");
  textContainer.className = "notification__text-content";
  const titleEl = createText({ label: title, type: TypographyType.bodyLarge });
  const descriptionEl = createText({
    label: description,
    type: TypographyType.bodyMedium,
  });
  textContainer.append(titleEl, descriptionEl);
  notification.append(icon, textContainer);
  const container = createContainer({ maxWidth: "400px" });
  container.append(notification);
  return container;
};
