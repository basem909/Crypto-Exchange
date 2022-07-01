import { useSelector } from 'react-redux';
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
      <span className="search-bar">
        <label name="search"> Search by Coin here </label>
        <input
          type="text"
          name="search"
          id="searchBar"
          placeholder="Coins name or symbol"
          onChange={(e) => {
            const newStr = e.target.value.toLowerCase() || '';
            changeHandler(newStr);
          }}
        />
      </span>
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
