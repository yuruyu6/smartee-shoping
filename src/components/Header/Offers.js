export default function Offers() {
  return (
    <div className="relative inline-flex">
      <span className="h-7 w-7 cursor-pointer transition duration-300 ease-in-out text-gray-500 hover:text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      </span>
      <span class="absolute h-4 w-4 right-0 top-0 -mt-2 -mr-2">
        <span class="animate-ping absolute inline-flex h-full w-3 rounded-full bg-blue-400 opacity-25"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
    </div>
  );
}
