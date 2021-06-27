import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductGroupByCategory } from '../../../redux/actions/productsGroup';
import ProductGroupCard from '../../ProductCard/ProductGroupCard';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import DataNotFound from '../../UI/DataNotFound';

export default function Content() {
  const dispatch = useDispatch();
  const products = useSelector(({ productsGroup }) => productsGroup.items);
  const isLoaded = useSelector(({ productsGroup }) => productsGroup.isLoaded);
  const { params } = useParams();

  useEffect(() => {
    dispatch(fetchProductGroupByCategory(params));
  }, [params, dispatch]);

  return (
    <div>
      {isLoaded ? (
        products.length > 0 ? (
          <div>
            <h1 className="text-3xl font-bold">{products[0].category.title}</h1>
            <div className="grid grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <div key={product._id}>
                  <ProductGroupCard {...product} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <DataNotFound />
        )
      ) : (
        <div className="grid grid-cols-2 xl:grid-cols-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
        </div>
      )}
    </div>
  );
}
