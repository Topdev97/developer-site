import type { StoryObj, Meta } from "@storybook/html";
import type { ModalProps } from "ui-html";
import { createModal } from "ui-html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Modal",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createModal(args);
  },
  argTypes: {
    label: { control: "text" },
    style: { control: { type: "select" }, options: ["filled", "outlined"] },
    size: {
      control: { type: "select" },
      options: ["medium", "large"],
    },
    loading: { control: "boolean" },

    disable: { control: "boolean" },

    hidden: { control: "boolean" },
  },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const outlined: Story = {
  name: "Outlined",
  args: {
    hidden: false
  },
};
