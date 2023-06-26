import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// const customViewPorts = {
//   small:{},
//   medium:{}
// }

export default preview;
