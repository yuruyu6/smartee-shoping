import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import productsGroup from './productsGroup';
import ui from './ui';

const rootReducer = combineReducers({
  productsGroup,
  products,
  categories,
  ui
});

export default rootReducer;
