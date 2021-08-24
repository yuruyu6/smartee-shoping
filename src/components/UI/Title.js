import PropTypes from 'prop-types';

function Title({ children }) {
  return <h1 className="text-3xl font-bold mb-3 opacity-75">{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
