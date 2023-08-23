import type { StoryObj, Meta } from "@storybook/html";
import { TypographyColor,TypographyTag,TypographyType,TypographyProps} from "ui-html";
import { createText } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Typography",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createText(args);
  },
  argTypes: {
    label: { control: "text" },
    type: { control: { type: "select" }, options: [
      TypographyType.titleLarge,
      TypographyType.titleMedium,
      TypographyType.titleSmall,
      TypographyType.bodyLarge,
      TypographyType.bodyMedium,
      TypographyType.bodySmall,
      TypographyType.listItem,
      TypographyType.link
    ] },
    tag:{ control: { type: "select" }, options: [
      TypographyTag.H1,
      TypographyTag.H2,
      TypographyTag.H3,
      TypographyTag.H4,
      TypographyTag.P,
      TypographyTag.li,
      TypographyTag.a
  
  
    ] }


  }
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<TypographyProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const titleLarge: Story = {
  name:"Title large",
  args: {
    label: "Fullstack Developer",
    type:TypographyType.titleLarge
  },
};


export const titleMedium: Story = {
  name:"Title medium",
  args: {
    label: "Favorites tools",
    type:TypographyType.titleMedium
  },
};

export const titleSmall: Story = {
  name:"Title small",
  args: {
    label: "Mercadopago Checkout",
    type:TypographyType.titleSmall
  },
};


export const bodyLarge: Story = {
  name:"Body large",
  args: {
    label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
    type:TypographyType.bodyLarge
  },
};

export const bodyMedium: Story = {
    name:"Body medium",
    args: {
      label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
      type:TypographyType.bodyMedium
    },
  };

export const bodySmall: Story = {
    name:"Body small",
    args: {
      label: "I'm a business administrator by profession, I worked in management control for 5 years, and now that I discovered what I am passionate about, Tech and bussiness, specially a i like web development with Javascript in frontend and backend with NodeJS I like to meet people, learn new things, achieve goals and sports, I'm a blue belt in brazilian jiu jitsu.",
      type:TypographyType.bodySmall
    },
  };
  export const listItem: Story = {
    name:"List Item",
    args: {
      label: "I'm a business administrator by profession, I worked in management control for 5 years.",
      type:TypographyType.listItem
    },
  };
  export const link: Story = {
    name:"Link",
    args: {
      label: "I'm a link",
      type:TypographyType.link,
    },
  };