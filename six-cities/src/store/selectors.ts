import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../types/state';

export const selectCity = (state: State) => state.city;

export const selectOffers = (state: State) => state.offers;

export const selectOffersByCity = createSelector(
    [selectCity, selectOffers],
    (city, offers) => offers.filter((offer) => offer.city.name === city.title)
);

export const selectPointsByCity = createSelector(
    [selectOffersByCity],
    (offers) => offers.map((offer) => ({
        title: offer.title,
        lat: offer.location.latitude,
        lng: offer.location.longitude
    }))
);
