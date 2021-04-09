import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductGroupCard from '../ProductGroupCard';
import { fetchProductGroupByCategory } from '../../../redux/actions/productsGroup';

export default function Content() {
  const dispatch = useDispatch();
  const products = useSelector(({ productsGroup }) => productsGroup.items);
  const isLoaded = useSelector(
    ({ productsGroup }) => productsGroup.isLoaded
  );
  let { params } = useParams();

  useEffect(() => {
    dispatch(fetchProductGroupByCategory(params));
  }, [params, dispatch]);

  return (
    <div>
      {(isLoaded && products.length > 0 )? (
        <div>
          <h1 className="text-3xl font-bold">{products[0].category.title}</h1>
          <div className="grid grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
            >
              <ProductGroupCard {...product} />
            </div>
          ))}
        </div>
        </div>
      ) : (
        <div className="flex justify-around">
          <span className="inline-flex">
            <svg
              className="animate-spin mr-2 h-7 w-7 text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Подождите, получаем данные...
          </span>
        </div>
      )}
    </div>
  );
}
