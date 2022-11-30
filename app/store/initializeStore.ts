import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { fetchProductsRequest } from './product/ProductActions';
import { rootReducers, rootSagas } from '.';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function initializeStore() {
  /**
   * TODO
   * I recommend using the configureStore method of the
   * @reduxjs/toolkit package, which replaces
   */

  const middleware = [];

  /**
   * Implement Middleware: Redux Saga https://github.com/redux-saga/redux-saga#readme
   *
   * redux-saga is a library that aims to make application side effects
   * (i.e. asynchronous things like data fetching and impure things like
   * accessing the browser cache) easier to manage, more efficient to execute,
   * easy to test, and better at handling failures.
   */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  if (__DEV__) {
    /**
     * Implement Middleware: Redux Logger https://github.com/LogRocket/redux-logger#readme
     */
    const logger = createLogger();
    middleware.push(logger);
  }

  /**
   * Create Redux Store with middlewares and reducers
   */
  const store = createStore(rootReducers(), applyMiddleware(...middleware));

  /**
   * Run saga with all sagas structures
   */
  sagaMiddleware.run(rootSagas);

  /**
   * Fetch products after created Redux
   */
  store.dispatch(fetchProductsRequest());

  return store;
}
