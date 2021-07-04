import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEY } from '../../utils/routerKeys';

const imageSize = 350;

export default function ProductGroupCard({
  _id,
  photoURL,
  title,
  productIds,
  deleteProductGroup,
  isShowControlButtons,
}) {
  const minPrice =
    productIds.reduce((prev, curr) => {
      return prev?.salePrice.min < curr?.salePrice.min ? prev : curr;
    }).salePrice.min || '...';

  const [imageLoaded, setImageLoaded] = useState(false);

  const onClickDeleteButton = (id) => {
    if (window.confirm(`Вы действительно хотите удалить ${title}?`)) {
      deleteProductGroup(id);
    }
  };

  return (
    <div className="border-b border-opacity-25">
      <Link to={`${ROUTER_KEY.PRODUCT_GROUP}/${_id}`} className="py-4">
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
      {isShowControlButtons && (
        <div className="flex justify-around my-2 opacity-50">
          <Link
            to={`${ROUTER_KEY.ADD_PRODUCT_GROUP}/${_id}`}
            className="flex justify-center w-full hover:bg-gray-300 transition-colors rounded py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <button
            onClick={() => onClickDeleteButton(_id)}
            className="flex justify-center w-full hover:bg-gray-300 transition-colors rounded py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
