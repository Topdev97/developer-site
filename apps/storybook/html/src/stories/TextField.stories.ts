import type { StoryObj, Meta } from "@storybook/html";
import { TextFieldProps,createTextField,TextFieldInputType } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Text Field",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createTextField(args);
  },
  argTypes: {
    label: { control: "text" },
    required: { control: "boolean" },
    hidden: { control: "boolean" },
    inputType:{control:"select",options:[
        TextFieldInputType.TEXT,
        TextFieldInputType.PASSWORD,
    ]}

  },
} satisfies Meta<TextFieldProps>;

export default meta


type Story = StoryObj<TextFieldProps>;


export const email :Story = {
    name:"Email Field",
    args:{
        required:true,
        hidden:false,
        label:"Email",
        inputType:TextFieldInputType.TEXT
    }
}