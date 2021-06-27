import {
  addProductGroup,
  deleteProductGroupById,
  getProductGroupByCategoryName,
  getProductGroupById,
  patchProductGroup,
  patchProductsByProductGroupId,
} from '../../utils/API';

export const createProductGroup = (createProductGroupDTO) => (dispatch) => {
  addProductGroup(createProductGroupDTO).then(
    () =>
      dispatch(setProductGroupSuccessResponse('Новая группа успешно создана')),
    (error) => dispatch(setProductGroupFailureResponse(error.message))
  );
  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
};

export const updateProductGroup = (id, updateProductGroupDTO) => (dispatch) => {
  patchProductGroup(id, updateProductGroupDTO).then(
    () =>
      dispatch(
        setProductGroupSuccessResponse('Новая группа успешно обновлена')
      ),
    (error) => dispatch(setProductGroupFailureResponse(error.message))
  );
  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
};

export const removeProductGroup = (id) => (dispatch) => {
  deleteProductGroupById(id).then(
    () => {
      dispatch(setProductGroupSuccessResponse('Запись успешно удалена'));
      dispatch(fetchProductGroupById(id));
    },
    (error) => dispatch(setProductGroupFailureResponse(error.message))
  );
  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
};

export const fetchProductGroupByCategory = (categoryName) => (dispatch) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
    payload: false,
  });

  getProductGroupByCategoryName(categoryName).then(({ data }) =>
    dispatch(setProductGroup(data))
  );
};

export const fetchProductGroupById = (id) => (dispatch) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
    payload: false,
  });

  getProductGroupById(id).then(({ data }) => dispatch(setProductGroup(data)));
};

export const updateProductsByProductGroupId = (id) => (dispatch) => {
  dispatch(
    setProductGroupSuccessResponse('Запрос на обновление успешно создан')
  );

  patchProductsByProductGroupId(id).then(
    () => '',
    (error) =>
      dispatch(setProductGroupFailureResponse(error.response.data.message))
  );

  setTimeout(() => dispatch({ type: 'HIDE_NOTIFICATION' }), 7500);
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
