import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Coin from './coin';
import './coinList.css';
import logo from './assets/B.jpeg';

const CoinsExihbit = ({ clickHandler, changeHandler }) => {
  const coins = useSelector((state) => state.showCoins);
  const filteredCoins = coins.filter((coin) => coin.searched);
  return (
    <div>
      <header className="header">
        <h1 className="title">Crypto World</h1>
      </header>
      <img src={logo} alt="crypto" className="background" />
      <form className="search-bar">
        <span name="search"> Search by Coin here </span>
        <input
          type="text"
          name="search"
          id="searchBar"
          placeholder="Coin name or symbol"
          onChange={(e) => {
            const newStr = e.target.value.toLowerCase() || '';
            changeHandler(newStr);
          }}
        />
      </form>
      <div className="coins-container">
        {filteredCoins
          && filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.price}
              rank={coin.rank}
              cap={coin.cap}
              clickHandler={clickHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default CoinsExihbit;

CoinsExihbit.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func,
};
