import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Offer } from "../types/offer";
import type { AxiosInstance } from "axios";
import { loadOffers, setOffersLoading } from "./action";
import type { AppDispatch } from '../types/state';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { extra: api, dispatch }) => {
  dispatch(setOffersLoading(true));
  try {
    const { data } = await api.get<Offer[]>('/offers');
    dispatch(loadOffers(data));
    dispatch(setOffersLoading(false));
  } catch (error) {
    dispatch(setOffersLoading(false));
    throw error;
  }
});
