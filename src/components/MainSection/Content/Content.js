import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchProductGroupByCategory,
  removeProductGroup,
} from '../../../redux/actions/productsGroup';
import ProductGroupCard from '../../ProductCard/ProductGroupCard';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import DataNotFound from '../../UI/DataNotFound';
import Title from '../../UI/Title';

export default function Content() {
  const dispatch = useDispatch();
  const products = useSelector(({ productsGroup }) => productsGroup.items);
  const isLoaded = useSelector(({ productsGroup }) => productsGroup.isLoaded);
  const { params } = useParams();

  useEffect(() => {
    dispatch(fetchProductGroupByCategory(params));
  }, [params, dispatch]);

  const onDeleteProductGroup = (id) => {
    dispatch(removeProductGroup(id));
  };

  return (
    <div>
      {isLoaded ? (
        products.length > 0 ? (
          <div>
            <Title text={products[0].category.title} />
            <div className="grid grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <div key={product._id}>
                  <ProductGroupCard
                    {...product}
                    deleteProductGroup={onDeleteProductGroup}
                  />
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
