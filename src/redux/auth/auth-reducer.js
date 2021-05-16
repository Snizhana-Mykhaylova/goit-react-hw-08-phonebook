import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (state, { payload }) => payload.user,
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
  [authActions.logoutSuccess]: (_, __) => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (state, { payload }) => payload,
  [authActions.loginError]: (state, { payload }) => payload,
  [authActions.logoutError]: (state, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const isLoggedIn = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isLoggedIn,
});
