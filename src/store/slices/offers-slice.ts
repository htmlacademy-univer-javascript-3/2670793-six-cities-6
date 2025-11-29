import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Offer } from '../../types/offer';

export type OffersState = {
  offers: Offer[];
  isOffersLoading: boolean;
};

const initialState: OffersState = {
  offers: [],
  isOffersLoading: false,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setOffersLoading: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
  },
});

export const { loadOffers, setOffersLoading } = offersSlice.actions;
export default offersSlice.reducer;

