import { getCategories } from '../../utils/API';
import { SET_CATEGORIES, SET_CATEGORIES_LOADED } from '../types';

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: SET_CATEGORIES_LOADED,
    payload: false,
  });

  getCategories().then(({ data }) => {
    dispatch(setCategories(data));
  });
};

export const setCategories = (items) => ({
  type: SET_CATEGORIES,
  payload: items,
});
