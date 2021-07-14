import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { fetchProductGroupByTitle } from '../../redux/actions/productsGroup';
import InlineProductGroupCard from '../ProductGroupCard/InlineProductGroupCard';
import NoSearchResult from '../UI/NoSearchResult';

export default function Search() {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const productsGroup = useSelector(
    ({ productsGroup }) => productsGroup.foundItems
  );
  const [visibleSearchResults, setVisibleSearchResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(searchInputRef.current)) {
      setVisibleSearchResults(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      dispatch(fetchProductGroupByTitle(debouncedSearchTerm));
    }
  }, [dispatch, debouncedSearchTerm]);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      setVisibleSearchResults({});
    };
  }, []);

  const onClickCard = () => {
    setVisibleSearchResults(false);
  };

  const onSearchFocus = () => {
    setVisibleSearchResults(true);
  };

  const onSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative" ref={searchInputRef}>
      <div>
        <div className="relative text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              aria-label="Search"
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="search"
            className={
              visibleSearchResults
                ? 'py-2 pl-10 pr-2 block w-full focus:shadow-xl border border-gray-300 focus:rounded-t-lg focus:outline-none focus:ring-transparent focus:border-b-0 focus:border-gray-300 transition-shadow'
                : 'py-2 pl-10 pr-2 block w-full border border-gray-300 focus:outline-none focus:ring-gray-300'
            }
            placeholder="Поиск..."
            autoComplete="off"
            onInput={(e) => onSearchInput(e)}
            onFocus={() => onSearchFocus()}
          />
        </div>
      </div>
      {visibleSearchResults && (
        <div className="absolute max-h-screen w-full overflow-y-auto py-6 rounded-b-xl shadow-xl border border-t-0 border-gray-300 bg-white animate-fade-in transition-all">
          {productsGroup.length > 0 ? (
            productsGroup.map((productGroup) => (
              <InlineProductGroupCard
                key={productGroup._id}
                onClickCard={onClickCard}
                {...productGroup}
              />
            ))
          ) : debouncedSearchTerm !== '' ? (
            <NoSearchResult />
          ) : (
            <p className="text-xl italic">Начните вводить запрос...</p>
          )}
        </div>
      )}
    </div>
  );
}
