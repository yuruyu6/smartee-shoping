import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductGroupCard({
  _id,
  photoURL,
  title,
  productIds,
}) {
  const imageSize = 350;
  const minPrice =
    productIds.reduce((prev, curr) => {
      return prev?.salePrice.min < curr?.salePrice.min ? prev : curr;
    }).salePrice.min || '...';

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <Link
        to={'/product/' + _id}
        className="p-4 border-b border-opacity-25"
      >
        <img
          onLoad={()=> setImageLoaded(true)}
          className={imageLoaded ? "opacity-100 transition-opacity h-auto" : "opacity-0 transition-opacity"}
          src={photoURL + `_${imageSize}x${imageSize}.jpg`}
          alt={title}
        />
        <p className="truncate">{title}</p>
        <p className="flex justify-end text-xl font-bold py-3">
          US ${minPrice}
        </p>
      </Link>
      <Link to={`/addProductGroup/${_id}`}>Edit</Link>
    </div>
  );
}
