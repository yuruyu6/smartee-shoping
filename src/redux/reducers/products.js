const initialState = {
  products: [],
  isLoaded: false,
  isWaitingResponce: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoaded: true,
      };

    case 'ADD_PRODUCT':
      return {
        ...state,
        products: action.payload,
        isWaitingResponce: false,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

      case 'SET_WAITING':
      return {
        ...state,
        isWaitingResponce: action.payload,
      };

    default:
      return state;
  }
};

export default products;
