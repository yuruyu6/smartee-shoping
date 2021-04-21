import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchProductGroupById,
  updateProductGroupById,
} from '../redux/actions/productsGroup';
import ProductGroupCard from '../components/ProductGroupCard/ProductGroupCard';
import SortPopup from '../components/SortPopup/SortPopup';

const imageSize = 350;
const defaultSortType = 'asc_price';
const sortTypes = [
  { name: 'цене', type: 'asc_price' },
  { name: 'рейтингу', type: 'desc_rating' },
  { name: 'количеству заказов', type: 'desc_orders' },
];

export default function ProductGroupInfo() {
  let { params } = useParams();
  const dispatch = useDispatch();
  const productsGroup = useSelector(
    ({ productsGroup }) => productsGroup.items
  );
  const isLoaded = useSelector(
    ({ productsGroup }) => productsGroup.isLoaded
  );
  const [sortParams, setSortType] = useState(
    sortTypes.find((i) => i.type === defaultSortType)
  );

  const [sortedProductsGroup, setSortedProductsGroup] = useState([]);

  useEffect(() => {
    setSortedProductsGroup(productsGroup);
  }, [productsGroup]);

  const setSortedList = useCallback((sortParam = defaultSortType) => {
    console.log('sorting!@!');
    switch (sortParam) {
      case 'asc_price':
        setSortedProductsGroup({
          ...productsGroup,
          productIds: productsGroup.productIds?.sort((a, b) =>
            a.salePrice.min > b.salePrice.min ? 1 : -1
          ),
        });
        break;

      case 'desc_rating':
        setSortedProductsGroup({
          ...productsGroup,
          productIds: productsGroup.productIds?.sort((a, b) =>
            a.averageStar < b.averageStar ? 1 : -1
          ),
        });
        break;
      case 'desc_orders':
        setSortedProductsGroup({
          ...productsGroup,
          productIds: productsGroup.productIds?.sort((a, b) =>
            a.orders < b.orders ? 1 : -1
          ),
        });
        break;

      default:
        setSortedProductsGroup({
          ...productsGroup,
          productIds: productsGroup.productIds?.sort((a, b) =>
            a.salePrice.min > b.salePrice.min ? 1 : -1
          ),
        });
        break;
    }
  }, [productsGroup]);

  useEffect(() => {
    setSortedList(sortParams.type);
  }, [sortParams]);

  const onSelectSortType = (sortParams = defaultSortType) => {
    setSortType(sortTypes.find((i) => i.type === sortParams));
  };

  const onClickUpdateButton = () => {
    dispatch(updateProductGroupById(productsGroup._id));
  };

  useEffect(() => {
    dispatch(fetchProductGroupById(params));
  }, [dispatch, params]);

  return (
    <div>
      {isLoaded && sortedProductsGroup ? (
        <div>
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div className="m-auto">
              {sortedProductsGroup.photoURL && (
                <img
                  className="h-48"
                  src={
                    sortedProductsGroup.photoURL +
                    `_${imageSize}x${imageSize}.jpg`
                  }
                  alt={sortedProductsGroup.title}
                />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-2xl font-bold opacity-75">
                {sortedProductsGroup.title}
              </h1>
              <div>
                {/* <p className="text-3xl font-bold text-right mb-8 opacity-75">
                  US $140.65
                </p> */}
                <button className="inline-flex text-xl w-full justify-center py-2 border border-transparent shadow font-bold rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Купить
                </button>
              </div>
            </div>
            <div className="hidden xl:block">
              <button
                className="cursor-pointer text-gray-400 font-semibold border-b-2 border-dashed border-gray-400 focus:outline-none"
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
                activeSortType={sortParams}
                onClickSortType={onSelectSortType}
              />
            </div>
            <div className="border rounded">
              {sortedProductsGroup.productIds?.map((product) => (
                <div
                  key={product.productId}
                  className="cursor-pointer odd:bg-gray-50"
                >
                  <a
                    href={`https://www.aliexpress.com/item/${product.productId}.html`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProductGroupCard {...product} />
                  </a>
                </div>
              ))}
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
