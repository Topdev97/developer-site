import type { StoryObj, Meta } from "@storybook/html";
import { TextAreaProps,createTextArea } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Text Areaa",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createTextArea(args);
  },
  argTypes: {
    label: { control: "text" },
    required: { control: "boolean" },
    hidden: { control: "boolean" },
    

  },
} satisfies Meta<TextAreaProps>;

export default meta


type Story = StoryObj<TextAreaProps>;


export const email :Story = {
    name:"Email Field",
    args:{
        required:false,
        hidden:false,
        label:"Message",
    }
}