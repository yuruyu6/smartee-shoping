import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchProductGroupById,
  setSortBy,
  updateProductsByProductGroupId,
} from '../redux/actions/productsGroup';
import { sortedProductsGroupSelector } from '../redux/selectors/productsGroupSelectors';
import ProductGroupCard from '../components/ProductGroupCard/ProductGroupCard';
import SortPopup from '../components/SortPopup/SortPopup';
import Title from '../components/UI/Title';

const imageSize = 350;
const defaultSortType = 'asc_price';
const sortTypes = [
  { name: 'цене', type: 'asc_price' },
  { name: 'рейтингу', type: 'desc_rating' },
  { name: 'количеству заказов', type: 'desc_orders' },
];

export default function ProductGroupInfo() {
  const { params } = useParams();
  const dispatch = useDispatch();
  const productsGroup = useSelector(sortedProductsGroupSelector);
  const isLoaded = useSelector(({ productsGroup }) => productsGroup.isLoaded);
  const sortParam = useSelector(({ productsGroup }) => productsGroup.sortParam);

  const onSelectSortType = (sortParams = defaultSortType) => {
    dispatch(setSortBy(sortParams));
  };

  const onClickUpdateButton = () => {
    dispatch(updateProductsByProductGroupId(productsGroup._id));
  };

  useEffect(() => {
    dispatch(fetchProductGroupById(params));
  }, [dispatch, params]);

  return (
    <div>
      {isLoaded && productsGroup ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="m-auto">
              {productsGroup.photoURL && (
                <img
                  className="h-48 w-48"
                  src={
                    productsGroup.photoURL + `_${imageSize}x${imageSize}.jpg`
                  }
                  alt={productsGroup.title}
                />
              )}
            </div>
            <div className="flex flex-col justify-between mt-4 md:m-0">
              <Title text={productsGroup.title} />
            </div>
            <div className="hidden md:block">
              <button
                className="cursor-pointer text-gray-400 font-semibold border-b-2 border-dashed border-gray-400 focus:outline-black hover:bg-gray-200 transition "
                onClick={() => onClickUpdateButton()}
              >
                Изменилась цена?
              </button>
            </div>
          </div>
          <div>
            <div className="flex relative justify-end my-6">
              <SortPopup
                items={sortTypes}
                activeSortType={sortTypes.find((i) => i.type === sortParam)}
                onClickSortType={onSelectSortType}
              />
            </div>
            <div className="border rounded">
              {productsGroup.productIds?.map(
                (product) =>
                  product.isActive && (
                    <div key={product.productId} className="odd:bg-gray-50">
                      <a
                        href={`https://www.aliexpress.com/item/${product.productId}.html`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ProductGroupCard {...product} />
                      </a>
                    </div>
                  )
              )}
            </div>
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
