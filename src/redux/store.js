import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import phoneReducer from './phonebook/phonebook-reducer.js';
import authReducer from './auth/auth-reducer.js';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    phonebook: phoneReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
