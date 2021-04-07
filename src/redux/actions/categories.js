import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios.get('/categories').then(({ data }) => {
    dispatch(setCategories(data));
  });
};
export const setCategories = (items) => ({
  type: 'SET_CATEGORIES',
  payload: items,
});
