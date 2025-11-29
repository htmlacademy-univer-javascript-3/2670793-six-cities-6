import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Offer } from '../types/offer';
import type { AxiosInstance } from 'axios';
import { loadOffers, setOffersLoading, setAuthorizationStatus, setUser } from './slices';
import type { AppDispatch } from '../types/state';
import { dropToken, saveToken } from '../api/token';
import type { LoginData, AuthInfo } from '../types/auth';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
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

export const login = createAsyncThunk<
  void,
  LoginData,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('user/login', async (loginData, { extra: api, dispatch }) => {
  try {
    const { data } = await api.post<AuthInfo>('/login', loginData);
    saveToken(data.token);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { token, ...user } = data;
    dispatch(setUser(user));
    dispatch(setAuthorizationStatus('AUTH'));
  } catch (error) {
    dispatch(setUser(null));
    dispatch(setAuthorizationStatus('NO_AUTH'));
    throw error;
  }
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api, dispatch }) => {
  try {
    const { data } = await api.get<AuthInfo>('/login');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { token, ...user } = data;
    dispatch(setUser(user));
    dispatch(setAuthorizationStatus('AUTH'));
  } catch (error) {
    dispatch(setUser(null));
    dispatch(setAuthorizationStatus('NO_AUTH'));
    throw error;
  }
});

export const logout = () => (dispatch: AppDispatch) => {
  dropToken();
  dispatch(setUser(null));
  dispatch(setAuthorizationStatus('NO_AUTH'));
};
