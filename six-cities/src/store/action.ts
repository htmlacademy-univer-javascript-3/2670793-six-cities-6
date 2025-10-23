import { createAction } from "@reduxjs/toolkit";
import type { City } from "../mocks/city";
import type { Offer } from "../mocks/offers";
import { offers } from "../mocks/offers";

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const loadAllOffers = () => loadOffers(offers);
