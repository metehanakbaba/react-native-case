import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { basketReducer } from './slices/basketSlice';
import apiService from './apiService';

/**
 * Whenever an action is dispatched, Redux will update each top-level
 * application state property using the reducer with the matching name.
 * It's important that the names match exactly, and that the reducer acts on
 * the corresponding ApplicationState property type.
 *
 */
const rootReducers = {
  basket: basketReducer,
  [apiService.reducerPath]: apiService.reducer,
};

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
