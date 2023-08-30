
export interface ContainerProps  {
    hidden?:boolean
    border?:boolean
}

export const createContainer = ({hidden = false,border = true}:ContainerProps) => {


const container = document.createElement("div");
container.className = `container ${hidden ? "hidden" : ""} ${border ? "container--border" : ""}`;

return container
}