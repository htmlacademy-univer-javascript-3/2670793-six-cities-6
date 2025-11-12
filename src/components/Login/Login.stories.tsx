import type { Meta, StoryObj } from '@storybook/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};


