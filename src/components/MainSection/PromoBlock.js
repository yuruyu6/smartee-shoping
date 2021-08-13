import { useState } from 'react';
import FaceSavoringFoodEmoji from '../../assets/face-savoring-food_emoji.png';
import WrappedGiftEmoji from '../../assets/wrapped-gift_emoji.png';
import { PROMOCODE } from '../../utils/constants';

export default function PromoBlock() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="rounded-xl py-6 px-8 h-auto bg-gradient-to-br from-yellow-400 to-pink-500 shadow-xl">
      <div className="block md:flex items-center">
        <div className="text-3xl xl:text-5xl xl:leading-snug text-white opacity-90 w-auto sm:w-9/12">
          <div className="mb-4">
            <p>
              <strong>ALIEXPRESS ПРОМОКОД НА ПЕРВУЮ ПОКУПКУ -4$</strong>
            </p>
          </div>
          <div className="px-4 py-1 sm:w-1/2 border-4 border-white border-dashed rounded-xl shadow font-medium bg-white bg-opacity-20 text-center hover:bg-opacity-95 hover:shadow-md hover:text-yellow-500 cursor-pointer transition-all">
            <p onClick={() => navigator.clipboard.writeText(PROMOCODE)}>
              {PROMOCODE}
            </p>
          </div>
        </div>
        <div
          className={
            imageLoaded
              ? 'opacity-100 hidden md:block border-8 border-white rounded-full p-5 bg-white bg-opacity-60 hover:bg-opacity-90 hover:border-yellow-300 transition-all group'
              : 'opacity-0 hidden md:block border-8 border-white rounded-full p-5 bg-white bg-opacity-60 hover:bg-opacity-90 hover:border-yellow-300 transition-all group'
          }
        >
          <img
            onLoad={() => setImageLoaded(true)}
            className="relative w-48 p-3 select-none"
            src={WrappedGiftEmoji}
            alt="Wrapped Gift Emoji"
          />
          <img
            className="absolute w-30 select-none transform -rotate-12 -translate-y-20 -translate-x-14 group-hover:-translate-x-0"
            src={FaceSavoringFoodEmoji}
            alt="Face Savoring FoodEmoji"
          />
        </div>
      </div>
    </div>
  );
}
