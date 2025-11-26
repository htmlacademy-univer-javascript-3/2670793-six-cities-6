import { createAction } from '@reduxjs/toolkit';
import type { City } from '../types/city';
import type { Offer } from '../types/offer';
import type { AuthorizationStatus } from './reducer';
import type { User } from '../types/auth';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setOffersLoading = createAction<boolean>('offers/setLoading');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setUser = createAction<User | null>('user/setUser');
