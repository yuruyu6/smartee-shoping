export const enqueueNotification = (notification, type) => ({
  type: 'SHOW_NOTIFICATION',
  payload: {
    message: notification,
    key: new Date().getTime() + Math.random(),
    autoHideDuration: 7500,
    type,
  },
});

export const closeNotification = (key) => ({
  type: 'HIDE_NOTIFICATION',
  payload: key,
});
