import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchProductGroupById,
  setSortBy,
} from '../redux/actions/productsGroup';
import ProductGroupCard from '../components/ProductGroupCard/ProductGroupCard';
const imageSize = 350;

export default function ProductGroupInfo() {
  let { params } = useParams();
  const dispatch = useDispatch();
  const productGroup = useSelector(
    ({ productsGroup }) => productsGroup.items
  );
  const isLoaded = useSelector(
    ({ productsGroup }) => productsGroup.isLoaded
  );
  const sortType = useSelector(
    ({ productsGroup }) => productsGroup.sortType
  );

  useEffect(() => {
    switch (sortType) {
      case 'asc_price':
        console.log('asc_price');
        break;
      case 'desc_price':
        break;
      case 'desc_rating':
        break;
      case 'desc_orders':
        break;

      default:
        break;
    }
  }, [sortType]);

  const onSortingDropdownChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchProductGroupById(params));
  }, [dispatch, params]);

  return (
    <div>
      {isLoaded && productGroup ? (
        <div>
          <div className="grid grid-cols-2 xl:grid-cols-3">
            <div className="m-auto">
              <img
                src={
                  productGroup.photoURL + `_${imageSize}x${imageSize}.jpg`
                }
                alt={productGroup.title}
              />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-2xl font-bold opacity-75">
                {productGroup.title}
              </h1>
              <div>
                <p className="text-3xl font-bold text-right mb-8 opacity-75">
                  US $140.65
                </p>
                <button className="inline-flex text-2xl w-full justify-center py-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  Купить
                </button>
              </div>
            </div>
            <div className="hidden xl:block">123</div>
          </div>
          <div>
            <div className="relative inline-flex my-6">
              <p className="text-lgm m-auto mr-2">Сортировать:</p>
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select
                onChange={(e) => onSortingDropdownChange(e)}
                className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                <option value="asc_price">По возрастанию цены</option>
                <option value="desc_price">По убыванию цены</option>
                <option value="desc_rating">По рейтингу</option>
                <option value="desc_orders">По количеству заказов</option>
              </select>
            </div>
            <div className="border rounded">
              {productGroup.productIds?.map((product) => (
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
