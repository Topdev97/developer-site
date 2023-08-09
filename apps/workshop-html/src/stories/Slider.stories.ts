import type { StoryObj, Meta } from "@storybook/html";
import type { SliderProps} from "ui-html";
import { createSlider } from "ui-html";
// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Slider",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createSlider(args);
  },
  argTypes: {
    hidden: { control: "boolean" }

  }
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<SliderProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args

export const navbar: Story = {
  name:"Navbar",
  args: {
    hidden:false,
  },
};

