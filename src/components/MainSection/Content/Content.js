import axios from 'axios';
import CustomInput from '../../UI/CustomInput';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Content() {
  /* const [productsList, setProductsList] = useState([]); */
  let { params } = useParams();

  /* useEffect(() => {
    axios.get('/products').then((products) => {
      setProductsList(...products.data);
    });
  }, [params]); */

  return (
    <div>
      <h1>Content 21 {params}</h1>      
    </div>
  );
}
