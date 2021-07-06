import dayjs from 'dayjs';

export default function InlineProductGroup({
  title,
  storeName,
  averageStar,
  salePrice,
  orders,
  edited,
}) {
  return (
    <div className="px-1 py-3 grid grid-cols-8 hover:bg-gray-200 transition">
      <div className="m-auto">
        <img
          className="h-6 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aliexpress_logo.svg/1280px-Aliexpress_logo.svg.png"
          alt="Aliexpress shop"
        />
      </div>
      <div className="col-span-5 lg:col-span-6">
        <p className="truncate w-full xl:w-1/2" title={title}>
          {title}
        </p>
        <p className="text-xl py-1 font-semibold">{storeName}</p>
        <div className="flex justify-between">
          <div className="flex opacity-75">
            <p className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              {averageStar}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-1 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {orders}
            </p>
          </div>
          <div>
            <p
              className="hidden xl:flex text-sm text-gray-400"
              title="Последнее обновление"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {dayjs(edited).format('DD.MM.YYYY')}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xl font-bold opacity-75 m-auto">
        US ${parseFloat(salePrice.min).toFixed(2)}
      </div>
    </div>
  );
}
