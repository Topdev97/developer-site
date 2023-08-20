import type { StoryObj, Meta } from "@storybook/html";
import { HeaderProps } from "ui-html";
import { createHeader } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Header",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createHeader(args);
  },
  argTypes: {
    title: { control: "text" },
    
    subtitle:{ control: "text" },
    buttonText:{ control: "text" },
    CTA:{ control: "boolean" },
    
    onClick: { action: 'clicked' }
    

  }
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<HeaderProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const header: Story = {
  name:"Header with CTA",
  args: {
    title: "Book your appointment",
    subtitle:"build your idea together, and get started",
    buttonText:"Book now!",
    CTA:true
  },
};


export const headerCTA: Story = {
  name:"Header",
  args: {
    title: "Book your appointment",
    subtitle:"build your idea together, and get started",
    buttonText:"",
    CTA:false
  },
};
