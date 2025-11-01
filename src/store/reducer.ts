import { createReducer } from "@reduxjs/toolkit";
import type { City } from "../types/city";
import type { Offer } from "../types/offer";
import { changeCity, loadOffers, setOffersLoading } from "./action";
import { PARIS } from "../types/city";

export type State = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
};

const initialState: State = {
  city: PARIS,
  offers: [],
  isOffersLoading: false,
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
      });
  }
);
