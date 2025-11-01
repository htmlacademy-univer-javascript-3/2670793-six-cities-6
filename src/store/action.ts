import { createAction } from "@reduxjs/toolkit";
import type { City } from "../types/city";
import type { Offer } from "../types/offer";

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setOffersLoading = createAction<boolean>('offers/setLoading');
