const initialState = {
    notificationMessage: '',
    notificationColor: 'green',
  };

const ui = (state = initialState, action) => {
  switch (action.type) {
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

export default ui;
