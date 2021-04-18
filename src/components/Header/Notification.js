import { useSelector } from 'react-redux';

export default function Notification() {
  const notificationMessage = useSelector(
    ({ ui }) => ui.notificationMessage
  );

  const notificationType = useSelector(({ ui }) => ui.notificationType);

  return notificationMessage ? (
    <div
      className={
        notificationType === 'success'
          ? 'h-16 animate-spin-slow flex items-center bg-green-100 transition-all'
          : 'h-16 animate-spin-slow flex items-center bg-red-100 transition-all'
      }
    >
      <div className="container align-middle mx-auto">
        <div className="flex items-center px-5 rounded ">
          <div
            className={
              notificationType === 'success'
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

          <p className="pl-2 text-lg">{notificationMessage}</p>
        </div>
      </div>
    </div>
  ) : null;
}
