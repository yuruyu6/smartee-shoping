import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProductGroupById } from '../redux/actions/productsGroup';
const imageSize = 350;
export default function ProductGroupInfo() {
  let { params } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(({ productsGroup }) => productsGroup.items);
  const isLoaded = useSelector(
    ({ productsGroup }) => productsGroup.isLoaded
  );

  /* const minPrice =
  productIds.reduce((prev, curr) => {
    return prev?.salePrice.min < curr?.salePrice.min ? prev : curr;
  }).salePrice.min || '...'; */

  useEffect(() => {
    dispatch(fetchProductGroupById(params));
  }, [dispatch, params]);


  return (
    <div>
      {isLoaded ? (
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold ">{product.title}</h1>
            <div>
              <p className="text-3xl font-bold text-right mb-8">US $140.65</p>
              <button className="inline-flex text-2xl w-full justify-center py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Купить</button>
            </div>
          </div>
          <div className="m-auto">
           {/*  <img
            src={product.photoURL + `_${imageSize}x${imageSize}.jpg`}
            alt={product.title}
          /> */}
          </div>
          
        </div>
      ) : (
        <div className="grid grid-cols-2 xl:grid-cols-4">fdssfdfsd</div>
      )}
    </div>
  );
}
