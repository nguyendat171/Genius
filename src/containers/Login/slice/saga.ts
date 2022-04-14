import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginFormActions as actions } from '.';
import { auth } from 'api';
import { setUserRegister } from 'utils/localStorages';
import { showToast } from 'utils/utils';

export function* loginSaga(action: PayloadAction<any>) {
  try {
    const {
      payload: { params, cb },
    } = action;
    const res = yield call(auth.checkLogin, { id: 1 });
    if (!res?.data || !res?.data?.username || !res?.data?.password) {
      throw new Error();
    }
    const { username, password } = res.data;
    if (username === params.username && password === params.password) {
      setUserRegister(JSON.stringify({ ...res.data }));
      yield put(actions.checkLoginSuccess(res.data));
      if (cb) cb();
    } else {
      showToast(
        'error',
        'Your username or password fo not match. Please try again.',
      );
      yield put(actions.checkLoginFailed());
    }
  } catch (error: any) {
    yield put(actions.checkLoginFailed());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authSaga() {
  yield takeLatest(actions.checkLogin.type, loginSaga);
}
