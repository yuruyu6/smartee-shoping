import {
  CLEAR_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCTS_LOADED,
  SET_PRODUCTS_SEARCH_TERM,
  SET_PRODUCTS_WAITING,
} from '../types';

const initialState = {
  items: [],
  searchTerm: '',
  isLoaded: false,
  isWaitingResponce: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        searchTerm: '',
        isLoaded: true,
      };

    case SET_PRODUCTS_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case CLEAR_PRODUCTS:
      return {
        ...state,
        items: [],
      };

    case SET_PRODUCTS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    case SET_PRODUCTS_WAITING:
      return {
        ...state,
        isWaitingResponce: action.payload,
      };

    default:
      return state;
  }
};

export default products;
