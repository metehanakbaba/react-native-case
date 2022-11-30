import { AnyAction, CombinedState, Reducer } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { combineReducers } from '@reduxjs/toolkit';
import { ProductReducers } from './product/ProductReducers';
import { ProductState } from './product/ProductTypes';
import ProductSagas from './product/ProductSaga';
import { BasketState } from './basket/BasketType';
import { BasketReducers } from './basket/BasketReducers';

/**
 * The top-level state object.
 * Note: I've placed it here, so it can be rechecked.
 */
export interface IApplicationState {
  productsState: ProductState;
  basketState: BasketState;
}

/**
 * Whenever an action is dispatched, Redux will update each top-level
 * application state property using the reducer with the matching name.
 * It's important that the names match exactly, and that the reducer acts on
 * the corresponding ApplicationState property type.
 *
 */
export const rootReducers = (): Reducer<CombinedState<IApplicationState>> =>
  combineReducers<IApplicationState>({
    productsState: ProductReducers,
    basketState: BasketReducers,
  });

/**
 * Here we use `redux-saga` to trigger actions asynchronously. `redux-saga`
 * uses something called a "generator function", which you can read about here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */
export function* rootSagas(): Generator<AnyAction> {
  yield all([fork(ProductSagas)]);
}
