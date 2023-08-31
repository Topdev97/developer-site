import type { StoryObj, Meta } from "@storybook/html";
import { createContainer,ContainerProps } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Container",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createContainer(args);
  },
  argTypes: {
    hidden:{ control: "boolean" },
    border:{ control: "boolean" },
    maxWidth:{control:"text"}

    

  }
} satisfies Meta<ContainerProps>;

export default meta;
type Story = StoryObj<ContainerProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const containerBorder: Story = {
  name:"Container Border",
  args: {
    hidden: false,
    border:true,
  },
};


export const container: Story = {
  name:"Card small",
  args: {
    hidden: false,
    border:false,
  },
};
