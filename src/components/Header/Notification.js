import { useSelector } from 'react-redux';

export default function Notification() {
  const notificationMessage = useSelector(
    ({ productsGroup }) => productsGroup.notificationMessage
  );

  const notificationColor = useSelector(
    ({ productsGroup }) => productsGroup.notificationColor
  );

  return notificationMessage ? (
    <div
      className={`h-16 animate-spin-slow flex items-center bg-${notificationColor}-100 transition-all`}
    >
      <div className="container align-middle mx-auto">
        <div className="flex items-center px-5 rounded ">
          <div
            className={`rounded bg-${notificationColor}-400 hover:bg-opacity-75 cursor-pointer transition`}
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
