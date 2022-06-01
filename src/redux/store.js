import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './reducers';

const reducer = reducers;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
