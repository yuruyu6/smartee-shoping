import { memo, useEffect, useRef, useState } from 'react';
import SortPopupOptions from './SortPopupOptions';

export default memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortButtonPopupRef = useRef();
  let arrayOfOptionsRefs = [];

  const toggleVisiblePopup = (e) => {
    if (visiblePopup === false) {
      return setVisiblePopup(!visiblePopup);
    }
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path =
      event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortButtonPopupRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      setVisiblePopup({});
    };
  }, []);

  const onSelectItem = (event, itemType, index) => {
    switch (event.type) {
      case 'click':
        if (onClickSortType) {
          onClickSortType(itemType);
        }
        break;
      case 'keydown':
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
          if (onClickSortType) {
            onClickSortType(itemType);
            setVisiblePopup(false);
            sortButtonPopupRef.current &&
              sortButtonPopupRef.current.focus();
          }
        }
        if (event.key === 'ArrowUp') {
          arrayOfOptionsRefs[
            index === 0 ? arrayOfOptionsRefs.length - 1 : index - 1
          ].focus();
        }
        if (event.key === 'ArrowDown') {
          arrayOfOptionsRefs[
            index >= arrayOfOptionsRefs.length - 1 ? 0 : index + 1
          ].focus();
        }
        break;
      default:
    }
  };

  const setOptionRef = (element) => {
    if (element !== null) {
      arrayOfOptionsRefs.push(element);
      arrayOfOptionsRefs[items.indexOf(activeSortType)]?.focus();
    }
  };

  return (
    <div>
      <button
        tabIndex="0"
        ref={sortButtonPopupRef}
        className="flex items-center focus:outline-black"
        onClick={(e) => toggleVisiblePopup(e)}
        aria-haspopup="listbox"
      >
        <span className="opacity-75 font-bold">Сортировать по:</span>
        <span className="cursor-pointer font-semibold border-b-2 mx-2 border-dashed text-yellow-500 border-yellow-500">
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
      </button>
      {visiblePopup && (
        <div className="overflow-hidden absolute right-0 py-2 shadow rounded bg-white z-10 w-48 ">
          <SortPopupOptions
            items={items}
            activeSortType={activeSortType}
            onSelectItem={onSelectItem}
            setOptionRef={setOptionRef}
          />
        </div>
      )}
    </div>
  );
});
