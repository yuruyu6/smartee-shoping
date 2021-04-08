const initialState = {
  items: [],
  currentCategory: '',
  isLoaded: false,
  notificationMessage: '',
  notificationColor: 'green',
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
    case 'SHOW_SUCCESS_NOTIFICATION':
      return {
        ...state,
        notificationMessage: action.payload,
        notificationColor: 'green',
      };
    case 'SHOW_DANGER_NOTIFICATION':
      return {
        ...state,
        notificationMessage: action.payload,
        notificationColor: 'red',
      };
    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        notificationMessage: '',
      };

    default:
      return state;
  }
};

export default productsGroup;
