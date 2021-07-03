import { Link } from 'react-router-dom';
import { ROUTER_KEY } from '../../utils/routerKeys';

export default function ButtonBlock() {
  return (
    <div className="flex">
      <div className="flex-1 text-center pr-4 mb-3 group">
        <Link
          to={ROUTER_KEY.ADD_PRODUCT}
          className="inline-flex w-full px-5 py-4 text-gray-600 rounded border border-gray-200 group-hover:bg-gray-300 transition"
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
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="ml-2">Добавить товар</p>
        </Link>
      </div>
      <div className="flex-1 text-center mb-3 group">
        <Link
          to={ROUTER_KEY.ADD_PRODUCT_GROUP}
          className="inline-flex w-full px-5 py-4 text-gray-600 rounded border border-gray-200 group-hover:bg-gray-300 transition"
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="ml-2">Создать группу</p>
        </Link>
      </div>
    </div>
  );
}
