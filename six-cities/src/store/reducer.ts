import { createReducer } from "@reduxjs/toolkit";
import type { City } from "../mocks/city";
import type { Offer } from "../mocks/offers";
import { changeCity, loadOffers } from "./action";
import { PARIS } from "../mocks/city";

export type State = {
  city: City;
  offers: Offer[];
};

const initialState: State = {
  city: PARIS,
  offers: []
};

export const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      });
  }
);
