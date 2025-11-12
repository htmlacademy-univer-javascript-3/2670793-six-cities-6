import type { Meta, StoryObj } from '@storybook/react-vite';
import Favorites from './Favorites';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Favorites> = {
  title: 'Pages/Favorites',
  component: Favorites,
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
};

export default meta;
type Story = StoryObj<typeof Favorites>;

export const Empty: Story = {};


