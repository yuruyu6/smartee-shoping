import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/products';
import { fetchCategories } from '../redux/actions/categories';
import { createProductGroup } from '../redux/actions/productsGroup';
import ProductCard from '../components/ProductCard/ProductCard';
import useDebounce from '../hooks/useDebounce';

export default function AddProductGroup() {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);
  const categories = useSelector(
    ({ categories }) => categories.categories
  );
  const isLoaded = useSelector(({ products }) => products.isLoaded);

  const [isValid, setIsValid] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProductCategory, setNewProductCategory] = useState({
    productIds: [],
    category: '',
    title: '',
    photoURL: '',
  });
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setSelectedProducts(products);
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts(debouncedSearchTerm));
  }, [dispatch, debouncedSearchTerm]);

  useEffect(() => {
    setIsValid(
      newProductCategory.productIds.length &&
        newProductCategory.title &&
        newProductCategory.category &&
        newProductCategory.photoURL
    );
  }, [newProductCategory]);

  const onProductCardClick = (productId) => {
    newProductCategory.productIds.includes(productId)
      ? setNewProductCategory({
          ...newProductCategory,
          productIds: [
            ...newProductCategory.productIds.filter(
              (i) => i !== productId
            ),
          ],
          photoURL: products.find((i) => i._id === productId)?.images[0],
        })
      : setNewProductCategory({
          ...newProductCategory,
          productIds: [...newProductCategory.productIds, productId],
          photoURL: products.find((i) => i._id === productId)?.images[0],
        });
  };

  const onCategorySelect = (e) =>
    setNewProductCategory({
      ...newProductCategory,
      category: e.target.value,
    });

  const onTitleInput = (e) =>
    setNewProductCategory({
      ...newProductCategory,
      title: e.target.value,
    });

  const onClickSubmit = () => {
    dispatch(createProductGroup(newProductCategory));
    setNewProductCategory({
      productIds: [],
      category: '',
      title: '',
      photoURL: '',
    });
  };

  const onProductTitleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClickSelectAll = () => {
    setNewProductCategory({
      ...newProductCategory,
      productIds: selectedProducts.map((i) => i._id),
    });
  };

  const onClickUnselectAll = () => {
    setNewProductCategory({
      ...newProductCategory,
      productIds: [],
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Создание нового товара</h1>
      <div className="block xl:flex mb-4">
        <div className="flex-1">
          <p className="text-lg">Название:</p>
          <input
            onInput={(e) => onTitleInput(e)}
            value={newProductCategory.title}
            type="text"
            className="block w-96 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg">Категория:</p>
          {isLoaded ? (
            <select
              disabled={!isLoaded}
              className="block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="animals"
              onChange={(e) => onCategorySelect(e)}
              value={newProductCategory.category}
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
              ))
            </select>
          ) : (
            <p>Выполяется загрузка...</p>
          )}
        </div>
      </div>
      <div className="mb-3">
        <p className="text-lg">Выберите товары:</p>
        <input
          onInput={(e) => onProductTitleSearchInput(e)}
          className="inline-flex py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          type="text"
        />
        <button
          onClick={() => onClickSelectAll()}
          className="inline-flex justify-center py-2 px-4 ml-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Выбрать все
        </button>
        <button
          onClick={() => onClickUnselectAll()}
          className="inline-flex justify-center py-2 px-4 ml-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Снять все
        </button>
      </div>
      {isLoaded ? (
        <div className="grid grid-cols-2 xl:grid-cols-4">
          {selectedProducts.map((product) => (
            <div
              className={
                newProductCategory.productIds.includes(product._id)
                  ? 'transition-colors bg-gray-200 cursor-pointer'
                  : 'transition-colors cursor-pointer'
              }
              onClick={() => onProductCardClick(product._id)}
              key={product._id}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      ) : (
        <p>Выполяется загрузка...</p>
      )}
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          disabled={!isValid}
          onClick={() => onClickSubmit()}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}
