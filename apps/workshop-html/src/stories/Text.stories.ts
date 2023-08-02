import type { StoryObj, Meta } from "@storybook/html";
import { TextProps,TextType } from "ui-html";
import { createText } from "ui-html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Text",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createText(args);
  },
  argTypes: {
    label: { control: "text" },
    type: { control: { type: "select" }, options: [
      TextType.titleLarge,
      TextType.titleMedium,
      TextType.titleSmall,
      TextType.bodyLarge,
      TextType.bodyMedium,
      TextType.bodySmall
    ] }

  },
} satisfies Meta<TextProps>;

export default meta;
type Story = StoryObj<TextProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const titleLarge: Story = {
  name:"Title large",
  args: {
    label: "Element",
    type:TextType.titleLarge
  },
};


export const titleMedium: Story = {
  name:"Title medium",
  args: {
    label: "Element",
    type:TextType.titleMedium
  },
};

export const titleSmall: Story = {
  name:"Title small",
  args: {
    label: "Element",
    type:TextType.titleSmall
  },
};


export const bodyLarge: Story = {
  name:"Body large",
  args: {
    label: "Element",
    type:TextType.bodyLarge
  },
};

export const bodyMedium: Story = {
    name:"Body medium",
    args: {
      label: "Element",
      type:TextType.bodyMedium
    },
  };

export const bodySmall: Story = {
    name:"Body small",
    args: {
      label: "Element",
      type:TextType.bodySmall
    },
  };