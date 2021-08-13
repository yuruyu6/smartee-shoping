import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loader from '../components/UI/Loader';
import {
  fetchProductGroupById,
  setSortBy,
  updateProductsByProductGroupId,
} from '../redux/actions/productsGroup';
import { sortedProductsGroupSelector } from '../redux/selectors/productsGroupSelectors';
import InlineProductCard from '../components/ProductCard/InlineProductCard';
import SortPopup from '../components/SortPopup/SortPopup';
import Title from '../components/UI/Title';
import { DEFAULT_CARD_IMAGE_SIZE } from '../utils/constants';

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
                  className="h-cardphoto w-cardphoto object-cover"
                  src={
                    productsGroup.photoURL +
                    `_${DEFAULT_CARD_IMAGE_SIZE}x${DEFAULT_CARD_IMAGE_SIZE}.jpg`
                  }
                  alt={productsGroup.title}
                />
              )}
            </div>
            <div className="flex flex-col justify-between mt-4 md:m-0">
              <Title text={productsGroup.title} />
            </div>
            <div className="hidden md:block ml-4">
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
                        <InlineProductCard {...product} />
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
