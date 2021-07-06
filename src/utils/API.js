import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || '';

const getProducts = () => {
  return axios.get('/products');
};

const getProductsWithoutCategory = () => {
  return axios.get('/products/withoutCategory');
};

const getProductsBySearchTerm = (searchTeam) => {
  return axios.post('/products/', { title: searchTeam });
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

const getProductGroupByTitle = (title) => {
  return axios.get(`/product-groups/byTitle/${title}`);
};

const getProductGroupById = (id) => {
  return axios.get(`/product-groups/${id}`);
};

const patchProductGroup = (id, updateProductGroupDTO) => {
  return axios.patch(`/product-groups/${id}`, updateProductGroupDTO);
};

const deleteProductGroupById = (id) => {
  return axios.delete(`/product-groups/${id}`);
};

const patchProductsByProductGroupId = (id) => {
  return axios.patch(`/product-groups/updateGroupProducts/${id}`);
};

const getCategories = () => {
  return axios.get('/categories');
};

export {
  getProductsBySearchTerm,
  getProducts,
  getProductsWithoutCategory,
  addProductById,
  addProductGroup,
  getProductGroupByCategoryName,
  getProductGroupByTitle,
  getProductGroupById,
  patchProductGroup,
  deleteProductGroupById,
  patchProductsByProductGroupId,
  getCategories,
};
