import type { StoryObj, Meta } from "@storybook/html";
import { TextProps,TextType } from "ui-html";
import { createText } from "ui-html";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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

  }
} satisfies Meta<TextProps>;

export default meta;
type Story = StoryObj<TextProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const titleLarge: Story = {
  name:"Title large",
  args: {
    label: "Fullstack Developer",
    type:TextType.titleLarge
  },
};


export const titleMedium: Story = {
  name:"Title medium",
  args: {
    label: "Favorites tools",
    type:TextType.titleMedium
  },
};

export const titleSmall: Story = {
  name:"Title small",
  args: {
    label: "Mercadopago Checkout",
    type:TextType.titleSmall
  },
};


export const bodyLarge: Story = {
  name:"Body large",
  args: {
    label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
    type:TextType.bodyLarge
  },
};

export const bodyMedium: Story = {
    name:"Body medium",
    args: {
      label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
      type:TextType.bodyMedium
    },
  };

export const bodySmall: Story = {
    name:"Body small",
    args: {
      label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
      type:TextType.bodySmall
    },
  };