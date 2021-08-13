import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_CARD_IMAGE_SIZE } from '../../utils/constants';
import { ROUTER_KEY } from '../../utils/routerKeys';

function InlineProductGroupCard({ _id, photoURL, title, onClickCard }) {
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
            src={
              photoURL +
              `_${DEFAULT_CARD_IMAGE_SIZE}x${DEFAULT_CARD_IMAGE_SIZE}.jpg`
            }
            alt={title}
          />
          <p className="ml-2 truncate text-xl font-bold">{title}</p>
        </div>
      </Link>
    </div>
  );
}

InlineProductGroupCard.propTypes = {
  _id: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickCard: PropTypes.func.isRequired,
};

export default InlineProductGroupCard;
