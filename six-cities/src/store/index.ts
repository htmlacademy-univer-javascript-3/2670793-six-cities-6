import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { reducer } from './reducer';
import type { State, AppDispatch } from '../types/state'

export const store = configureStore({
    reducer
});



export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export * from './selectors';
export * from './action';