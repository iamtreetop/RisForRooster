import { takeEvery, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from './shop.actions';

// import { FETCH_CATEGORIES_START } from "./shop.reducer";

export function* fetchCategoriesAsync() {
  yield console.log('i am fired');
    try {
    const collectionRef = firestore.collection("categories");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot) 
    yield put(fetchCategoriesSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
};

export function* fetchCategoriesStart() {
  yield takeEvery(
    'FETCH_CATEGORIES_START',
    fetchCategoriesAsync
  );
}