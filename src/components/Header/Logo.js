import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <div className="select-none font-extrabold italic text-3xl tracking-wide group">
        <h1>
          <span>SMART</span>
          <span className="transition duration-300 ease-in-out text-yellow-500 group-hover:text-opacity-70">
            EE
          </span>
        </h1>
      </div>
    </Link>
  );
}
