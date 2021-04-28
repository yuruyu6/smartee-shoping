import { getProductsWithoutCategory, addProductById, getProducts } from '../../utils/API';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (withoutCategory = true) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  if (withoutCategory) {
    getProductsWithoutCategory().then(({ data }) => {
      dispatch(setProducts(data));
    });
  } else {
    getProducts().then(({ data }) => {
      dispatch(setProducts(data));
    });
  }
  
};

export const addProduct = (productId) => (dispatch) => {
  dispatch({
    type: 'SET_WAITING',
    payload: true,
  });

  addProductById(productId)
    .then(
      () =>
        dispatch(setAddProductSuccessResponse('Товар успешно добавлен')),
      (error) => dispatch(setAddProductFailureResponse(error.message))
    )
    .finally(() => {
      dispatch({
        type: 'SET_WAITING',
        payload: false,
      });
      setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
    });
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});

export const setProductsSearchTerm = (searchTeam) => ({  
  type: 'SET_PRODUCTS_SEARCH_TERM',
  payload: searchTeam,
});

export const setAddProductSuccessResponse = (response) => ({
  type: 'SHOW_SUCCESS_NOTIFICATION',
  payload: response,
});

export const setAddProductFailureResponse = (response) => ({
  type: 'SHOW_DANGER_NOTIFICATION',
  payload: response,
});
