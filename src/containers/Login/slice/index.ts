import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { loginFormState } from './types';
import { getUserRegister } from 'utils/localStorages';
import { account } from './account';

export const initialState: loginFormState = {
  loading: false,
  data: null,
};

const user = getUserRegister();
if (
  account.username === user?.username &&
  account.password === user?.password
) {
  initialState.data = user;
}

const slice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    checkLogin(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    checkLoginSuccess(state, action: PayloadAction<any>) {
      const { payload } = action;
      state.loading = false;
      state.data = payload;
    },
    checkLoginFailed(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const { actions: loginFormActions, reducer } = slice;

export const useLoginFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};
