
export interface ContainerProps  {
    hidden?:boolean;
    border?:boolean;
    background?:string;
}

export const createContainer = ({hidden = false,border = true,background = "var(--dark)"}:ContainerProps) => {


const container = document.createElement("div");
container.style.background = background
container.className = `container ${hidden ? "hidden" : ""} ${border ? "container--border" : ""}`;

return container
}