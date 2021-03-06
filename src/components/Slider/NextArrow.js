export default function NextArrow({ onClick }) {
  return (
    <div
      className={
        'absolute top-1/2 -right-10 cursor-pointer hover:bg-gray-300 transition rounded p-1'
      }
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}
