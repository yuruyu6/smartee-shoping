import { Link } from 'react-router-dom';

export default function MenuList() {
  return (
    <ul className="justify-center align-middle">
      <li className="h-10 px-5 hover:bg-gray-100 group mb-2">
        <Link className="flex align-middle" to="/cpu">
          <div className="rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 mx-1.5 text-white relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <p className="cursor-pointer width-100 leading-10 font-medium text-sm opacity-75">
            Процессоры
          </p>
        </Link>
      </li>
      <li className="h-10 px-5 hover:bg-gray-100 group mb-2">
        <Link className="flex align-middle" to="/motherboard">
          <div className="rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 mx-1.5 text-white relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
          </div>
          <p className="cursor-pointer width-100 leading-10 font-medium text-sm opacity-75">
            Материнские платы
          </p>
        </Link>
      </li>
      <li className="h-10 px-5 hover:bg-gray-100 group mb-2">
        <Link className="flex align-middle" to="/ram">
          <div className="rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3">
            <svg
              className="w-7 mx-1.5 text-white relative"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"
              ></path>
            </svg>
          </div>

          <p className="cursor-pointer width-100 leading-10 font-medium text-sm opacity-75">
            Оперативная память
          </p>
        </Link>
      </li>
      <li className="h-10 px-5 hover:bg-gray-100 group mb-2">
        <Link className="flex align-middle" to="/drive">
          <div className="rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3">
            <svg
              className="w-7 mx-1.5 text-white relative"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"
              ></path>
            </svg>
          </div>

          <p className="cursor-pointer leading-10 font-medium text-sm opacity-75">
            Накопители
          </p>
        </Link>
      </li>
      <li className="h-10 px-5 hover:bg-gray-100 group mb-2">
        <Link className="flex align-middle" to="/accessories">
          <div className="rounded flex justify-center bg-yellow-500 group-hover:bg-opacity-75 transition mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 mx-1.5 text-white relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>

          <p className="cursor-pointer leading-10 font-medium text-sm opacity-75">
            Аксессуары
          </p>
        </Link>
      </li>
    </ul>
  );
}
