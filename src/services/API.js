import axios from 'axios';

export const getProducts = () => {
  axios.get('/products').then((products) => {
    return products;
  });
};

export const getCategories = () => {
  axios.get('/categories').then((categories) => {
    return categories;
  });
};
