import type { Meta, StoryObj } from '@storybook/react-vite';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, State, AuthorizationStatus } from '../../store/reducer';
import { PARIS } from '../../types/city';
import type { Offer } from '../../types/offer';
import { MemoryRouter } from 'react-router-dom';

const sampleOffer = (id: string, cityName: string): Offer => ({
  id,
  title: 'Cozy studio',
  type: 'apartment',
  price: 120,
  city: {
    name: cityName,
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
  },
  location: { latitude: 48.857, longitude: 2.353, zoom: 12 },
  isFavorite: false,
  isPremium: true,
  rating: 4.4,
  previewImage: 'https://via.placeholder.com/260x200',
});

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
  render: () => {
    const preloadedState: Partial<State> = {
      city: PARIS,
      offers: [sampleOffer('1', 'Paris'), sampleOffer('2', 'Paris')],
      isOffersLoading: false,
      authorizationStatus: 'NO_AUTH' as AuthorizationStatus,
      user: null,
    };
    const store = configureStore({
      reducer,
      preloadedState,
    });

    return (
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const preloadedState: Partial<State> = {
      city: PARIS,
      offers: [],
      isOffersLoading: true,
      authorizationStatus: 'NO_AUTH' as AuthorizationStatus,
      user: null,
    };
    const store = configureStore({
      reducer,
      preloadedState,
    });

    return (
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
  },
};


