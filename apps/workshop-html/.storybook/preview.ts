import type { Preview } from "@storybook/html";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';



const preview: Preview = {
  parameters: {
    
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    
  },
};

export default preview;
