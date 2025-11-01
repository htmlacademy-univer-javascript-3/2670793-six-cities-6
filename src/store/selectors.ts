import { createSelector } from '@reduxjs/toolkit';
import type { State } from './reducer';
import type { City } from '../types/city';
import type { Offer } from '../types/offer';

export const selectCity = (state: State) => state.city;

export const selectOffers = (state: State) => state.offers;

export const selectOffersByCity = createSelector(
    [selectCity, selectOffers],
    (city: City, offers: Offer[]) => offers.filter((offer) => offer.city.name === city.title)
);

export const selectPointsByCity = createSelector(
    [selectOffersByCity],
    (offers: Offer[]) => offers.map((offer) => ({
        title: offer.title,
        lat: offer.location.latitude,
        lng: offer.location.longitude
    }))
);

export const selectOffersLoadingStatus = (state: State) => state.isOffersLoading;

export const selectCities = createSelector(
  [selectOffers],
  (offers:Offer[]) => {
    const citiesMap = new Map<string, { title: string; lat: number; lng: number; zoom: number }>();

    offers.forEach((offer: Offer) => {
      if (!citiesMap.has(offer.city.name)) {
        citiesMap.set(offer.city.name, {
          title: offer.city.name,
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
          zoom: offer.city.location.zoom,
        });
      }
    });

    return Array.from(citiesMap.values());
  }
);
