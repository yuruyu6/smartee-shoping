import { memo } from 'react';

export default memo(function SortPopupOptions({
  items,
  activeSortType,
  onSelectItem,
  setOptionRef,
}) {
  return (
    <ul tabIndex="0">
      {items &&
        items.map((item, index) => (
          <li
            tabIndex="0"
            role="option"
            ref={setOptionRef}
            aria-posinset={index}
            aria-setsize={items.length}
            key={item.type}
            aria-selected={item.type === activeSortType.type}
            onClick={(e) => onSelectItem(e, item.type, index)}
            onKeyDown={(e) => onSelectItem(e, item.type, index)}
            className={
              item.type === activeSortType.type
                ? 'p-3 focus:bg-gray-100 hover:bg-gray-200 transition cursor-pointer outline-none font-bold text-yellow-500'
                : 'p-3 focus:bg-gray-100 hover:bg-gray-200 transition cursor-pointer outline-none'
            }
          >
            {item.name}
          </li>
        ))}
    </ul>
  );
});
