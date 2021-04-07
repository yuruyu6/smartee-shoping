import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get('/products').then(({ data }) => {
    dispatch(setProducts(data));
  });
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
