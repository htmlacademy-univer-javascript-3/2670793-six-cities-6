import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { City } from '../../types/city';
import { PARIS } from '../../types/city';

export type CityState = {
  city: City;
};

const initialState: CityState = {
  city: PARIS,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;

