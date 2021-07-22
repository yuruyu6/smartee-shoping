import { SET_CATEGORIES, SET_CATEGORIES_LOADED } from '../types';

const initialState = {
  categories: [],
  isLoaded: false,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoaded: true,
      };

    case SET_CATEGORIES_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default categories;
