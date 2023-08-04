import type { StoryObj, Meta } from "@storybook/html";
import { CardProps,CardSize } from "ui-html";
import { createCard } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Card",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCard(args);
  },
  argTypes: {
    title: { control: "text" },
    size: { control: { type: "select" }, options: [
        CardSize.Small,
        CardSize.Medium
    ] },
    description:{ control: "text" },
    image:{ control: "text" }
    

  }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const cardMedium: Story = {
  name:"Card medium",
  args: {
    title: "MercadoPago Checkout Pro",
    description:"An amazing implementation of authentication with Firebase and NodeJS",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902584/davc93/Screenshot%20from%202023-04-07%2017-20-26.png.png",
    size:CardSize.Medium
  },
};


export const cardSmall: Story = {
  name:"Card small",
  args: {
    title: "Consulting",
    description:"An amazing implementation of authentication with Firebase and NodeJS",
    image:"https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902584/davc93/Screenshot%20from%202023-04-07%2017-20-26.png.png",
    size:CardSize.Small
  },
};
