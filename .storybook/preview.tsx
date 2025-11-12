import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { Provider } from 'react-redux';
import { store } from '../src/store';
import '../public/css/main.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;

