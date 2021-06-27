const initialState = {
  notificationMessage: '',
  notificationType: 'success',
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SUCCESS_NOTIFICATION':
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: 'success',
      };
    case 'SHOW_DANGER_NOTIFICATION':
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: 'danger',
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
