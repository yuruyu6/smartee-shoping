import PropTypes from 'prop-types';
import { DEFAULT_CARD_IMAGE_SIZE } from '../../utils/constants';

function SimpleProductCard({ images, title, salePrice, averageStar, orders }) {
  return (
    <div className="p-4 border-b border-opacity-25" title={title}>
      <img
        className="h-auto"
        src={
          images[0] +
          `_${DEFAULT_CARD_IMAGE_SIZE}x${DEFAULT_CARD_IMAGE_SIZE}.jpg`
        }
        alt={title}
      />
      <p className="truncate">{title}</p>
      <p className="flex justify-end text-xl font-bold py-3">
        US ${salePrice.min}
      </p>
      <div className="flex justify-between text-xs text-gray-500">
        <p className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
        {orders ? (
          <p className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
        ) : null}
      </div>
    </div>
  );
}

SimpleProductCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  salePrice: PropTypes.objectOf(PropTypes.number).isRequired,
  averageStar: PropTypes.string.isRequired,
  orders: PropTypes.number.isRequired,
};

export default SimpleProductCard;
