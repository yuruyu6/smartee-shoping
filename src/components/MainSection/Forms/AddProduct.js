import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/products';
import { fetchCategories } from '../../../redux/actions/categories';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';

export default function AddProduct() {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);
  const categories = useSelector(
    ({ categories }) => categories.categories
  );
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const [isValid, setIsValid] = useState(false);
  const [newProductCategory, setNewProductCategory] = useState({
    selectedProducts: [],
    category: '',
    title: '',
    photoURL: 'fds',
  });

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setIsValid(
      newProductCategory.selectedProducts.length &&
        newProductCategory.title &&
        newProductCategory.category &&
        newProductCategory.photoURL
    );
  }, [newProductCategory]);

  const onProductCardClick = (productId) => {
    newProductCategory.selectedProducts.includes(productId)
      ? setNewProductCategory({
          ...newProductCategory,
          selectedProducts: [
            ...newProductCategory.selectedProducts.filter(
              (i) => i !== productId
            ),
          ],
        })
      : setNewProductCategory({
          ...newProductCategory,
          selectedProducts: [
            ...newProductCategory.selectedProducts,
            productId,
          ],
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

  return (
    <div>
      <h1>Создание нового товара</h1>
      <div className="block xl:flex mb-4">
        <div className="flex-1">
          <p className="text-lg">Название:</p>
          <input
            onInput={(e) => onTitleInput(e)}
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
      <p className="text-lg">Выберите товары:</p>
      {isLoaded ? (
        <div className="grid grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              className={
                newProductCategory.selectedProducts.includes(product._id)
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
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button disabled={!isValid} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-20 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Сохранить
        </button>
      </div>
    </div>
  );
}
