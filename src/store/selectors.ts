import { createSelector } from '@reduxjs/toolkit';
import type { State } from '../types/state';
import type { City } from '../types/city';
import type { Offer } from '../types/offer';

// Base selectors
export const selectCity = (state: State) => state.city.city;

export const selectOffers = (state: State) => state.offers.offers;

export const selectOffersLoadingStatus = (state: State) => state.offers.isOffersLoading;

export const selectAuthorizationStatus = (state: State) => state.user.authorizationStatus;

export const selectUser = (state: State) => state.user.user;

// Memoized selectors
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

export const selectCities = createSelector(
  [selectOffers],
  (offers: Offer[]) => {
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

// Selector for favorite offers
export const selectFavoriteOffers = createSelector(
  [selectOffers],
  (offers: Offer[]) => offers.filter((offer) => offer.isFavorite)
);

// Selector for favorite offers grouped by city
export const selectFavoriteOffersByCity = createSelector(
  [selectFavoriteOffers],
  (favoriteOffers: Offer[]) => favoriteOffers.reduce((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, Offer[]>)
);

// Selector for offer by id
export const selectOfferById = createSelector(
  [selectOffers, (_state: State, id: string) => id],
  (offers: Offer[], id: string) => offers.find((offer) => offer.id === id)
);

// Selector for near places (excluding current offer)
export const selectNearPlaces = createSelector(
  [selectOffers, (_state: State, currentOfferId: string) => currentOfferId],
  (offers: Offer[], currentOfferId: string) => offers.filter((offer) => offer.id !== currentOfferId)
);
