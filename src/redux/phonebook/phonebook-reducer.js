import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterChange,
} from './phonebook-actions.js';

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const error = createReducer(false, {
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => true,
  [fetchContactRequest]: () => false,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => true,
});

const filterReducer = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
  error,
});
