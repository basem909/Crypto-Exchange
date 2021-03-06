import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Coin = ({
  id, name, image, symbol, price, cap, clickHandler,
}) => (
  <div className="coin-container" id={id}>
    <Link to="/coinDetails" id={id} onClick={() => clickHandler(id)}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="sc-ftvSup boTpfX"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
      </svg>
    </Link>
    <img src={image} alt="coin" />
    <h2>{name}</h2>
    <h4>{symbol}</h4>
    <p>
      {price}
      $
    </p>
    <p>
      Cap:
      {cap}
      $
    </p>
  </div>
);

export default Coin;

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cap: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
