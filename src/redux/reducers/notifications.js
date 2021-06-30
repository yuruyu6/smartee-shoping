const initialState = {
  notifications: [],
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...handleNotificationsArray(state.notifications),
          action.payload,
        ],
      };

    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          (notifications) => notifications.key !== action.payload
        ),
      };

    default:
      return state;
  }
};

const handleNotificationsArray = (array) => {
  while (array.length >= 3) {
    array.shift();
  }
  return array;
};

export default notifications;
