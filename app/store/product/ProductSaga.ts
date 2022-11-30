import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import ProductApiService from '../../services/api/ProductApiService';
import { ProductsResult } from '../../services/api/types';

import { fetchProductsSuccess, fetchProductsError } from './ProductActions';
import { ProductActionTypes, IProduct } from './ProductTypes';

/**
 * Get Products
 */
function* handleFetchAll() {
  try {
    const response: ProductsResult = yield call(ProductApiService.getProducts);

    yield put(fetchProductsSuccess(response.data as IProduct[]));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchProductsError(err.stack));
    } else {
      yield put(fetchProductsError('An unknown error occured.'));
    }
  }
}

/**
 * Watch GetProducts Api Call
 */
function* watchFetchAllRequest() {
  yield takeLatest(ProductActionTypes.FETCH_ALL_REQUEST, handleFetchAll);
}

// We can also use `fork()` here to split our saga into multiple watchers.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* ProductSagas() {
  yield all([fork(watchFetchAllRequest)]);
}

export default ProductSagas;
