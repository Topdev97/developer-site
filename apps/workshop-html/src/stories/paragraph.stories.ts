import type { StoryObj, Meta } from "@storybook/html";
import type { TagProps } from "ui-html";
import { createElement } from "ui-html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Paragraph",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createElement(args);
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    tag: { control: { type: "select" }, options: [
      "h1",
      "h2",
      "h3",
      "p"
    ] }

  },
} satisfies Meta<TagProps>;

export default meta;
type Story = StoryObj<TagProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const Title1: Story = {
  name:"Title 1",
  args: {
    label: "Element",
    backgroundColor:"#000000",
    tag:"h1"
  },
};


export const Title2: Story = {
  name:"Title 2",
  args: {
    label: "Element",
    backgroundColor:"#000000",
    tag:"h2"
  },
};

export const Title3: Story = {
  name:"Title 3",
  args: {
    label: "Element",
    backgroundColor:"#000000",
    tag:"h3"
  },
};


export const paragraph: Story = {
  name:"Paragraph",
  args: {
    label: "Element",
    backgroundColor:"#000000",
    tag:"p"
  },
};