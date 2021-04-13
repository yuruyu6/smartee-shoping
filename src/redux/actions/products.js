import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (searchTeam) => (
  dispatch
) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .post('/products/search', { title: searchTeam })
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const addProduct = (productId) => (dispatch) => {
  dispatch({
    type: 'SET_WAITING',
    payload: true,
  });

  axios
    .post('/products', { productId })
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

export const setAddProductSuccessResponse = (response) => ({
  type: 'SHOW_SUCCESS_NOTIFICATION',
  payload: response,
});

export const setAddProductFailureResponse = (response) => ({
  type: 'SHOW_DANGER_NOTIFICATION',
  payload: response,
});
