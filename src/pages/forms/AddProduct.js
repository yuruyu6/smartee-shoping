import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/UI/Title';
import { addProduct } from '../../redux/actions/products';


export default function AddProduct() {
  const dispatch = useDispatch();
  const isWaitingResponce = useSelector(
    ({ products }) => products.isWaitingResponce
  );
  const [productURL, setProductURL] = useState('');
  const [productId, setProductId] = useState('');

  useEffect(
    () =>
      setProductId(
        productURL.match(/\d{6,}/) ? productURL.match(/\d{6,}/)[0] : ''
      ),
    [productURL]
  );

  const onProductInput = (e) => {
    setProductURL(e.target.value);
  };

  const onClickSubmit = () => {
    dispatch(addProduct(productId));
  };

  return (
    <div>
      <Title
        text="Добавление товара"
      />
      <div className="mb-4">
        <div className="flex-1">
          <p className="text-lg">Ссылка на товар:</p>
          <input
            onInput={(e) => onProductInput(e)}
            value={productURL}
            type="text"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {isWaitingResponce ? (
          <button
            disabled
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-40 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <svg
              className="animate-spin mr-2 h-5 w-5 text-white"
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
            Сохранить
          </button>
        ) : (
          <button
            disabled={!productId}
            onClick={() => onClickSubmit()}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 disabled:opacity-40 hover:bg-opacity-75 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Сохранить
          </button>
        )}
      </div>
    </div>
  );
}
