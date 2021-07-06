const initialState = {
  items: [],
  foundItems: [],
  isLoaded: false,
  sortParam: 'asc_price',
};

const productsGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_GROUP':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'CLEAR_PRODUCT_GROUP':
      return {
        ...state,
        items: [],
        isLoaded: false,
      };

    case 'SET_SORT_BY':
      return {
        ...state,
        sortParam: action.payload,
      };

    case 'SET_PRODUCT_GROUP_FOUNDED_ITEMS':
      return {
        ...state,
        foundItems: action.payload,
      };
    case 'CLEAR_PRODUCT_GROUP_FOUNDED_ITEMS':
      return {
        ...state,
        foundItems: [],
      };

    default:
      return state;
  }
};

export default productsGroup;
