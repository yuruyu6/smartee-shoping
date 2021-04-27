import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const getProductsBySearchTerm = (searchTeam) => {
  return axios.post('/products/search', { title: searchTeam });
};

const addProductById = (productId) => {
  return axios.post('/products', { productId });
};

const addProductGroup = (createProductGroupDTO) => {
  return axios.post('/product-groups', createProductGroupDTO);
};

const getProductGroupByCategoryName = (categoryName) => {
  return axios.get(`/product-groups/detailed/${categoryName}`);
};

const getProductGroupById = (id) => {
  return axios.get(`/product-groups/${id}`);
};

const patchProductGroupById = (id) => {
  return axios.patch(`/product-groups/${id}`);
};

const getCategories = () => {
  return axios.get('/categories');
};

export {
  getProductsBySearchTerm,
  addProductById,
  addProductGroup,
  getProductGroupByCategoryName,
  getProductGroupById,
  patchProductGroupById,
  getCategories,
};
