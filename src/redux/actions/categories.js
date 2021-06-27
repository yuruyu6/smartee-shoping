import { getCategories } from '../../utils/API';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  getCategories().then(({ data }) => {
    dispatch(setCategories(data));
  });
};

export const setCategories = (items) => ({
  type: 'SET_CATEGORIES',
  payload: items,
});
