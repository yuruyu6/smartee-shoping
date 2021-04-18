const initialState = {
  items: [],
  isLoaded: false,
  sortType: ''
};

const productsGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_GROUP':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_SORT_BY':
      return {
        ...state,
        sortType: action.payload,
      };

    case 'CLEAR_PRODUCT_GROUP':
      return {
        ...state,
        items: [],
        isLoaded: false,
      };

    default:
      return state;
  }
};

export default productsGroup;
