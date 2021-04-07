import axios from 'axios';

export const createProductGroup = (createProductGroupDTO) => (
  dispatch
) => {
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.post('/product-groups/', createProductGroupDTO).then(
    () =>
      dispatch(setProductGroupResponse('ALL GOOD')),
    (error) => dispatch(setProductGroupResponse(error.message))
  );
};

export const setProductGroupResponse = (response) => ({
  type: 'SHOW_NOTIFICATION',
  payload: response,
});
