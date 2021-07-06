import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEY } from '../../utils/routerKeys';

const imageSize = 350;

export default function InlineProductGroupCard({
  _id,
  photoURL,
  title,
  onClickCard,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="hover:bg-gray-100 transition-colors mt-2"
      onClick={onClickCard}
    >
      <Link to={`${ROUTER_KEY.PRODUCT_GROUP}/${_id}`} className="py-4 ">
        <div className="flex px-2">
          <img
            onLoad={() => setImageLoaded(true)}
            className={
              imageLoaded
                ? 'opacity-100 transition-opacity h-32'
                : 'opacity-0 transition-opacity'
            }
            src={photoURL + `_${imageSize}x${imageSize}.jpg`}
            alt={title}
          />
          <p className="ml-2 truncate text-xl font-bold">{title}</p>
        </div>
      </Link>
    </div>
  );
}
