import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const createProductGroup = (createProductGroupDTO) => (
  dispatch
) => {
  axios.post('/product-groups', createProductGroupDTO).then(
    () =>
      dispatch(
        setProductGroupSuccessResponse('Новая группа успешно создана')
      ),
    (error) => dispatch(setProductGroupFailureResponse(error.message))
  );
  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
};

export const fetchProductGroupByCategory = (categoryName) => (
  dispatch
) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
    payload: false,
  });

  axios
    .get(`/product-groups/detailed/${categoryName}`)
    .then(({ data }) => dispatch(setProductGroup(data)));
};

export const fetchProductGroupById = (id) => (
  dispatch
) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
    payload: false,
  });

  axios
    .get(`/product-groups/${id}`)
    .then(({ data }) => dispatch(setProductGroup(data)));
};

export const setSortBy = (sortType) => ({
  type: 'SET_SORT_BY',
  payload: sortType,
});

export const setProductGroup = (data) => ({
  type: 'SET_PRODUCT_GROUP',
  payload: data,
});

export const setProductGroupSuccessResponse = (response) => ({
  type: 'SHOW_SUCCESS_NOTIFICATION',
  payload: response,
});

export const setProductGroupFailureResponse = (response) => ({
  type: 'SHOW_DANGER_NOTIFICATION',
  payload: response,
});
