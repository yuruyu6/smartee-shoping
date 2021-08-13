import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Alert({ notification, onClickCloseButton }) {
  let hideNotificationTimeout = setTimeout(
    () => onClickCloseButton(notification.key),
    notification.autoHideDuration
  );

  useEffect(() => {
    return () => {
      clearTimeout(hideNotificationTimeout);
    };
  }, [hideNotificationTimeout]);

  return (
    <div
      key={notification.key}
      className={
        notification.type === 'success'
          ? 'h-16 animate-fade-in flex items-center bg-green-100 transition-all'
          : 'h-16 animate-fade-in flex items-center bg-red-100 transition-all'
      }
    >
      <div className="container align-middle mx-auto">
        <div className="flex items-center justify-between px-5 rounded">
          <div className="flex items-center">
            <div
              className={
                notification.type === 'success'
                  ? 'rounded bg-green-400 hover:bg-opacity-75 cursor-pointer transition'
                  : 'rounded bg-red-400 hover:bg-opacity-75 cursor-pointer transition'
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 m-2 text-white relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="pl-2 text-lg">{notification.message}</p>
          </div>
          <button
            className="rounded hover:bg-gray-100 transition"
            onClick={() => onClickCloseButton(notification.key)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  notification: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  onClickCloseButton: PropTypes.func,
};

export default Alert;
