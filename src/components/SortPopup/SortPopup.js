import { memo, useEffect, useRef, useState } from 'react';

export default memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortPopupRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path =
      event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortPopupRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (itemType) => {
    if (onClickSortType) {
      onClickSortType(itemType);
    }
    setVisiblePopup(false);
  };

  return (
    <div ref={sortPopupRef}>
      <div className="flex items-center ">        
        <p className="opacity-75 font-bold">Сортировать по:</p>
        <span
          className="cursor-pointer font-semibold border-b-2 mx-2 border-dashed text-yellow-500 border-yellow-500"
          onClick={() => toggleVisiblePopup()}
        >
          {activeSortType.name}
        </span>
        <svg
          className={
            !visiblePopup
              ? 'transform rotate-180 opacity-30'
              : 'opacity-30'
          }
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"          
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
      </div>
      {visiblePopup && (
        <div className="overflow-hidden absolute right-0 py-2 shadow rounded bg-white z-10 w-48 ">
          <ul>
            {items &&
              items.map((i) => (
                <li
                  key={i.type}
                  onClick={() => onSelectItem(i.type)}
                  className={
                    i.type === activeSortType.type
                      ? 'p-3 hover:bg-gray-200 transition cursor-pointer font-bold text-yellow-500'
                      : 'p-3 hover:bg-gray-200 transition cursor-pointer'
                  }
                >
                  {i.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});
