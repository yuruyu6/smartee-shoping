import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AddProductsGroup() {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('/categories').then((response) => {
      setCategories(response.data); 
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl mb-3">Создание новой группы</h1>

      <p className="text-lg">Категория:</p>
      {isLoaded ? (
        <select
          disabled={!isLoaded}
          className="block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
          onChange={(e) => console.log(e.target.value)}
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
    </>
  );
}
