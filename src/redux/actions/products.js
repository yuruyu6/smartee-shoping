import {
  getProductsWithoutCategory,
  addProductById,
  getProducts,
} from '../../utils/API';
import {
  SET_PRODUCTS,
  SET_PRODUCTS_LOADED,
  SET_PRODUCTS_SEARCH_TERM,
  SET_PRODUCTS_WAITING,
} from '../types';
import { enqueueNotification } from './notifications';

export const fetchProducts =
  (withoutCategory = false) =>
  (dispatch) => {
    dispatch({
      type: SET_PRODUCTS_LOADED,
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
    type: SET_PRODUCTS_WAITING,
    payload: true,
  });

  addProductById(productId)
    .then(
      () => dispatch(enqueueNotification('Товар успешно добавлен', 'success')),
      (error) =>
        dispatch(
          enqueueNotification(
            'Возникла проблема при добавлении товара, возможно он уже добавлен',
            'error'
          )
        )
    )
    .finally(() => {
      dispatch({
        type: SET_PRODUCTS_WAITING,
        payload: false,
      });
    });
};

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
});

export const setProductsSearchTerm = (searchTeam) => ({
  type: SET_PRODUCTS_SEARCH_TERM,
  payload: searchTeam,
});
