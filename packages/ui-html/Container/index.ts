
export interface ContainerProps  {
    hidden?:boolean
    border?:boolean
    maxWidth?:string;
}

export const createContainer = ({hidden = false,border = true, maxWidth = "auto"}:ContainerProps) => {


const container = document.createElement("div");
container.style.maxWidth = maxWidth
container.className = `container ${hidden ? "hidden" : ""} ${border ? "container--border" : ""}`;

return container
}