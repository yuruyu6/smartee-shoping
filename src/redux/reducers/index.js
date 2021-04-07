import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import productsGroup from './productsGroup';

const rootReducer = combineReducers({
  productsGroup,
  products,
  categories,
});

export default rootReducer;
