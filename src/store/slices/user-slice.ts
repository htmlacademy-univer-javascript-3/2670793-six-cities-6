import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/auth';

export type AuthorizationStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState: UserState = {
  authorizationStatus: 'UNKNOWN',
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthorizationStatus, setUser } = userSlice.actions;
export default userSlice.reducer;

