import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductGroupCard({ _id, photoURL, title, productIds }) {
  const imageSize = 350;
  const minPrice =
    productIds.reduce((prev, curr) => {
      return prev?.salePrice.min < curr?.salePrice.min ? prev : curr;
    }).salePrice.min || '...';

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="border-b border-opacity-25">
      <Link to={'/product/' + _id} className="py-4">
        <div className="px-2">
          <img
            onLoad={() => setImageLoaded(true)}
            className={
              imageLoaded
                ? 'opacity-100 transition-opacity h-auto'
                : 'opacity-0 transition-opacity'
            }
            src={photoURL + `_${imageSize}x${imageSize}.jpg`}
            alt={title}
          />
          <p className="truncate">{title}</p>
          <p className="flex justify-end text-xl font-bold py-3">
            US ${minPrice}
          </p>
        </div>
      </Link>
      <div className="flex justify-around my-2 opacity-50">
        <Link
          to={`/addProductGroup/${_id}`}
          className="flex justify-center w-full hover:bg-gray-300 transition-colors rounded py-1"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </Link>
        <Link
          to={`/addProductGroup/${_id}`}
          className="flex justify-center w-full hover:bg-gray-300 transition-colors rounded py-1"
        >
          <div>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
