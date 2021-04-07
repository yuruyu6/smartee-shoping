const initialState = {
  message: '',
};

const productsGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
        console.log('action.payload', action.payload);
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default productsGroup;
