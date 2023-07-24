import type { StoryObj, Meta } from "@storybook/html";
import { ButtonProps, ButtonSize, Style } from "ui-html";
import { createButton } from "ui-html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton(args);
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    style: { control: { type: "select" }, options: ["filled", "outlined"] },
    size: {
      control: { type: "select" },
      options: ["medium", "large"],
    },
    loading: { control: "boolean" },

    disable: { control: "boolean" },

    hidden: { control: "boolean" },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    style: Style.filled,
    loading: false,
    disable: false,
    hidden: false,
    label: "Button"
  },
};

export const Medium: Story = {
  args: {
    size: ButtonSize.Medium,
    label: "Button",
    loading: false,
    disable: false,
    hidden: false,
    style: Style.outlined,
  },
};
