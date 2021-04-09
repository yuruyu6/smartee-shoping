export default function ProductGroupCard({ photoURL, title, productIds }) {
  const imageSize = 350;
  const minPrice = productIds.reduce((prev, curr) => {
    return prev?.salePrice.min < curr?.salePrice.min ? prev : curr;
  }).salePrice.min || '...';

  return (
    <div className="p-4 border-b border-opacity-25">
      <img
        className="h-auto"
        src={photoURL + `_${imageSize}x${imageSize}.jpg`}
        alt={title}
      />
      <p className="truncate">{title}</p>
      <p className="flex justify-end text-xl font-bold py-3">
        US ${minPrice}
      </p>
    </div>
  );
}
