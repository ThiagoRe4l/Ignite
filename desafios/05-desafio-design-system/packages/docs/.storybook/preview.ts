import type { Preview } from "@storybook/react";
import {themes} from '@storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark, //aqui está a solução
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
