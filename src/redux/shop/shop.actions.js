import { 
  firestore, 
  convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils'

export const fetchCategoriesStart = () => ({
  type: "FETCH_CATEGORIES_START",
});

export const fetchCategoriesSuccess = collectionsMap => ({
  type: "FETCH_CATEGORIES_SUCCESS",
  payload: collectionsMap
});

export const fetchCategoriesFailure = errorMessage => ({
  type: "FETCH_CATEGORIES_FAILURE",
  payload: errorMessage
});

export const fetchCategoriesStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("categories");
    dispatch(fetchCategoriesStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCategoriesSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCategoriesFailure(error.message)));
  };
};