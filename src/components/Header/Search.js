export default function Search() {
  return (
    <div className="border border-gray-200 border-opacity-75">
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
          className="py-2 pl-10 pr-2 block w-full shadow-none border border-gray-300 focus:outline-none focus:ring-transparent focus:border-gray-400"
          placeholder="Поиск..."
          autoComplete="off"
        />
      </div>
    </div>
  );
}
