import { coinSearched, coinsShowed, detailsShowed } from './action-types';

const showCoins = function reducer(state = [], action = {}) {
  switch (action.type) {
    case coinsShowed:
      return [...action.payload];
    case detailsShowed:
      return state.map((coin) => {
        if (coin.id !== action.payload) {
          return coin;
        }
        return { ...coin, clicked: !coin.clicked };
      });
    case coinSearched:
      console.log('activated');
      return state.map((coin) => {
        if (
          coin.name.toLowerCase().includes(action.payload)
          || coin.symbol.toLowerCase().includes(action.payload)
        ) {
          return { ...coin, searched: true };
        }
        return { ...coin, searched: false };
      });
    default:
      return state;
  }
};

export default showCoins;
