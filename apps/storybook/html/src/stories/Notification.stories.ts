import type { StoryObj, Meta } from "@storybook/html";
import {  createNotification,NotificationType ,NotificationProps} from "ui-html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Notification",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createNotification(args);
  },
  argTypes: {
    
    type: { control: "select",options:[
        NotificationType.ERROR,
        NotificationType.INFO,
        NotificationType.SUCCESS,
        NotificationType.WARNING
    ] },
  },
} satisfies Meta<NotificationProps>;

export default meta;
type Story = StoryObj<NotificationProps>;



export const error: Story = {
  name:"Error",
  args: {
    type: NotificationType.ERROR,
    title:"titulo",
    description:"descripcion descripcion descripcion descripcion"
},
};
export const info: Story = {
    name:"Info",
    args: {
      type: NotificationType.INFO,
      title:"titulo",
      description:"descripcion descripcion descripcion descripcion"
  },
  };
  export const success: Story = {
    name:"Success",
    args: {
      type: NotificationType.SUCCESS,
      title:"titulo",
      description:"descripcion descripcion descripcion descripcion"
  },
  };
  export const warning: Story = {
    name:"Warning",
    args: {
      type: NotificationType.WARNING,
      title:"titulo",
      description:"descripcion descripcion descripcion descripcion"
  },
  };
