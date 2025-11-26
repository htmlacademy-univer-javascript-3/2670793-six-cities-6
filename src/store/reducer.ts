import { createReducer } from '@reduxjs/toolkit';
import type { City } from '../types/city';
import type { Offer } from '../types/offer';
import type { User } from '../types/auth';
import { changeCity, loadOffers, setOffersLoading, setAuthorizationStatus, setUser } from './action';
import { PARIS } from '../types/city';

export type AuthorizationStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState: State = {
  city: PARIS,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: 'UNKNOWN',
  user: null,
};

export const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(setOffersLoading, (state, action) => {
        state.isOffersLoading = action.payload;
      })
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUser, (state, action) => {
        state.user = action.payload;
      });
  }
);
