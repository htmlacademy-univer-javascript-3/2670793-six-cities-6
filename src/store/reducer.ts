import { combineReducers } from '@reduxjs/toolkit';
import offersReducer from './slices/offers-slice';
import userReducer from './slices/user-slice';
import cityReducer from './slices/city-slice';

export const reducer = combineReducers({
  offers: offersReducer,
  user: userReducer,
  city: cityReducer,
});
