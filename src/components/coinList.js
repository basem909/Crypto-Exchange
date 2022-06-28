import Coin from './coin';
import { useDispatch, useSelector } from "react-redux";

const CoinsExihbit = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.showCoins);
  // const bookingHandler = (id) => {
  //   dispatch(bookRocket(id));
  // };

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
          />
        ))}
    </div>
  );
};

export default CoinsExihbit;
