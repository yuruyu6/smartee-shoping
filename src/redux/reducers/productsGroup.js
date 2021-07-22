import {
  CLEAR_PRODUCTS_GROUP,
  CLEAR_PRODUCTS_GROUP_FOUNDED_ITEMS,
  SET_PRODUCTS_GROUP,
  SET_PRODUCTS_GROUP_FOUNDED_ITEMS,
  SET_PRODUCTS_GROUP_SORT_BY,
} from '../types';

const DEFAULT_SORT_PARAM = 'asc_price';

const initialState = {
  items: [],
  foundItems: [],
  isLoaded: false,
  sortParam: DEFAULT_SORT_PARAM,
};

const productsGroup = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_GROUP:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case CLEAR_PRODUCTS_GROUP:
      return {
        ...state,
        items: [],
        isLoaded: false,
      };

    case SET_PRODUCTS_GROUP_SORT_BY:
      return {
        ...state,
        sortParam: action.payload,
      };

    case SET_PRODUCTS_GROUP_FOUNDED_ITEMS:
      return {
        ...state,
        foundItems: action.payload,
      };
    case CLEAR_PRODUCTS_GROUP_FOUNDED_ITEMS:
      return {
        ...state,
        foundItems: [],
      };

    default:
      return state;
  }
};

export default productsGroup;
