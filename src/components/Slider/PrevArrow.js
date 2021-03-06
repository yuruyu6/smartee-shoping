export default function PrewArrow({ onClick }) {
  return (
    <div
      className={
        'absolute top-1/2 -left-10 cursor-pointer hover:bg-gray-300 transition rounded p-1'
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}
