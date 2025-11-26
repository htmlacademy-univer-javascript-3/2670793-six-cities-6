import type { Meta, StoryObj } from '@storybook/react-vite';
import Header from './Header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, State, AuthorizationStatus } from '../../store/reducer';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    showNavigation: true,
  },
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Guest: Story = {
  args: {
    showNavigation: true,
  },
};

export const Authorized: Story = {
  render: () => {
    const preloadedState: Partial<State> = {
      authorizationStatus: 'AUTH' as AuthorizationStatus,
      user: {
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatarUrl: 'https://via.placeholder.com/74',
        isPro: false,
      },
    };
    const store = configureStore({
      reducer,
      preloadedState,
    });
    return (
      <Provider store={store}>
        <Header showNavigation />
      </Provider>
    );
  },
};


