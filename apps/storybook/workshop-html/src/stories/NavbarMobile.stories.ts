import type { StoryObj, Meta } from "@storybook/html";
import type { NavbarMobileProps} from "ui-html";
import { createNavbarMobile } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Navbar Mobile",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createNavbarMobile(args);
  },
  argTypes: {
    logo: { control: "text" }

  }
} satisfies Meta<NavbarMobileProps>;

export default meta;
type Story = StoryObj<NavbarMobileProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const navbar: Story = {
  name:"Navbar",
  args: {
    logo: "https://blog.hubspot.com/hubfs/image8-2.jpg",
  },
};

