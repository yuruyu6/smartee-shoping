import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import productsGroup from './productsGroup';
import notifications from './notifications';

const rootReducer = combineReducers({
  productsGroup,
  products,
  categories,
  notifications,
});

export default rootReducer;
