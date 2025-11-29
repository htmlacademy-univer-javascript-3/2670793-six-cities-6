import type { Meta, StoryObj } from '@storybook/react-vite';
import OfferComponent from './Offer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../../store/reducer';
import type { State } from '../../types/state';
import type { AuthorizationStatus } from '../../store/slices/user-slice';
import type { Offer } from '../../types/offer';
import { PARIS } from '../../types/city';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const makeOffer = (id: string): Offer => ({
  id,
  title: 'Spacious loft',
  type: 'apartment',
  price: 220,
  city: {
    name: 'Paris',
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
  },
  location: { latitude: 48.857, longitude: 2.353, zoom: 12 },
  isFavorite: false,
  isPremium: true,
  rating: 4.8,
  previewImage: 'https://via.placeholder.com/260x200',
  bedrooms: 2,
  maxAdults: 4,
  description: 'Great place near center',
  goods: ['Wi-Fi', 'Heating'],
  host: { id: 1, name: 'Alice', isPro: true, avatarUrl: 'https://via.placeholder.com/74' },
  images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200?2'],
});

const meta: Meta<typeof OfferComponent> = {
  title: 'Pages/Offer',
  component: OfferComponent,
};

export default meta;
type Story = StoryObj<typeof OfferComponent>;

export const Found: Story = {
  render: () => {
    const preloadedState: Partial<State> = {
      city: { city: PARIS },
      offers: { offers: [makeOffer('42'), makeOffer('43')], isOffersLoading: false },
      user: { authorizationStatus: 'NO_AUTH' as AuthorizationStatus, user: null },
    };
    const store = configureStore({
      reducer,
      preloadedState,
    });

    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/offer/42']}>
          <Routes>
            <Route path="/offer/:id" element={<OfferComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  },
};

export const NotFound: Story = {
  render: () => {
    const preloadedState: Partial<State> = {
      city: { city: PARIS },
      offers: { offers: [makeOffer('1')], isOffersLoading: false },
      user: { authorizationStatus: 'NO_AUTH' as AuthorizationStatus, user: null },
    };
    const store = configureStore({
      reducer,
      preloadedState,
    });

    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/offer/999']}>
          <Routes>
            <Route path="/offer/:id" element={<OfferComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  },
};


