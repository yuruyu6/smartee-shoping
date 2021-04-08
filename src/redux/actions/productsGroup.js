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
    (error) => dispatch(setProductGroupDangerResponse(error.message))
  );
  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
};

export const fetchProductGroupByCategory = (categoryName) => (dispatch) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
    payload: false,
  });

  axios
    .get(`/product-groups/detailed/${categoryName}`)
    .then(({ data }) => dispatch(setProductGroup(data)));
};

export const setProductGroup = (data) => ({
  type: 'SET_PRODUCT_GROUP',
  payload: data,
});

export const setProductGroupSuccessResponse = (response) => ({
  type: 'SHOW_SUCCESS_NOTIFICATION',
  payload: response,
});

export const setProductGroupDangerResponse = (response) => ({
  type: 'SHOW_DANGER_NOTIFICATION',
  payload: response,
});
