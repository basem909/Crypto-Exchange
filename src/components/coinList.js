import { useSelector } from 'react-redux';
import Coin from './coin';
import './coinList.css'

const CoinsExihbit = ({ clickHandler}) => {
  const coins = useSelector((state) => state.showCoins);

  return (
    <div className="coins-container">
      {coins
        && coins.map((coin) => (
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
  );
};

export default CoinsExihbit;
