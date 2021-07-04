import {
  addProductGroup,
  deleteProductGroupById,
  getProductGroupByCategoryName,
  getProductGroupById,
  patchProductGroup,
  patchProductsByProductGroupId,
} from '../../utils/API';
import { enqueueNotification } from './notifications';

export const createProductGroup = (createProductGroupDTO) => (dispatch) => {
  addProductGroup(createProductGroupDTO).then(
    () =>
      dispatch(enqueueNotification('Новая группа успешно создана', 'success')),
    (error) => dispatch(enqueueNotification(error.message, 'error'))
  );
};

export const updateProductGroup = (id, updateProductGroupDTO) => (dispatch) => {
  patchProductGroup(id, updateProductGroupDTO).then(
    () =>
      dispatch(
        enqueueNotification('Новая группа успешно обновлена', 'success')
      ),
    (error) => dispatch(enqueueNotification(error.message, 'error'))
  );
};

export const removeProductGroup = (id, currentCategory) => (dispatch) => {
  deleteProductGroupById(id).then(
    () => {
      dispatch(enqueueNotification('Запись успешно удалена', 'success'));
      dispatch(fetchProductGroupByCategory(currentCategory));
    },
    (error) => dispatch(enqueueNotification(error.message, 'error'))
  );
};

export const fetchProductGroupByCategory = (categoryName) => (dispatch) => {
  dispatch({
    type: 'CLEAR_PRODUCT_GROUP',
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
    enqueueNotification('Запрос на обновление успешно создан', 'success')
  );

  patchProductsByProductGroupId(id).then(
    () => '',
    (error) =>
      dispatch(enqueueNotification(error.response.data.message, 'error'))
  );
};

export const setSortBy = (sortType) => ({
  type: 'SET_SORT_BY',
  payload: sortType,
});

export const setProductGroup = (data) => ({
  type: 'SET_PRODUCT_GROUP',
  payload: data,
});
