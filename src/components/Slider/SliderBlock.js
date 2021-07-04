import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchCategories } from '../../redux/actions/categories';
import { fetchProductGroupByCategory } from '../../redux/actions/productsGroup';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';
import ProductGroupCard from '../ProductCard/ProductGroupCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import DataNotFound from '../UI/DataNotFound';

const sliderSettings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DEFAULT_CATEGORY = 'cpu';

export default function SliderBlock() {
  const dispatch = useDispatch();
  const products = useSelector(({ productsGroup }) => productsGroup.items);
  const isLoaded = useSelector(({ productsGroup }) => productsGroup.isLoaded);
  const categories = useSelector(({ categories }) => categories.categories);
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_CATEGORY);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductGroupByCategory(currentCategory));
  }, [dispatch, currentCategory]);

  const onClickCategory = (category) => {
    setCurrentCategory(category.category);
  };

  return (
    <div>
      <div className="mt-6">
        <div className="flex justify-between align-middle items-center overflow-x-auto">
          <div className="flex">
            {categories?.slice(0, 4).map((category) => (
              <div
                key={category._id}
                className={
                  category.category === currentCategory
                    ? 'text-center bg-gray-200 py-2 px-4 rounded font-bold mr-3 opacity-90'
                    : 'text-center font-medium py-2 px-4 mr-3 cursor-pointer rounded hover:bg-gray-100 transition-colors opacity-90'
                }
                onClick={() => onClickCategory(category)}
              >
                {category.title}
              </div>
            ))}
          </div>
          <Link
            to={currentCategory}
            className="cursor-pointer font-semibold border-b-2 mx-2 border-dashed text-yellow-500 border-yellow-500 hover:text-yellow-600 hover:border-yellow-600 transition"
          >
            Посмотреть все
          </Link>
        </div>
      </div>
      <div className="mt-6 px-8">
        {isLoaded ? (
          products.length > 0 ? (
            <Slider {...sliderSettings}>
              {products?.slice(0, 16).map((product) => (
                <div key={product._id}>
                  <ProductGroupCard {...product} />
                </div>
              ))}
            </Slider>
          ) : (
            <DataNotFound />
          )
        ) : (
          <Slider {...sliderSettings}>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
