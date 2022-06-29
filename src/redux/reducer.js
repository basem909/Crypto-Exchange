import { coinsShowed, detailsShowed } from './action-types';

const showCoins = function reducer(state = [], action = {}) {
  switch (action.type) {
    case coinsShowed:
      return [...state, ...action.payload];
    case detailsShowed:
      return state.map((coin) => {
        if (coin.id !== action.payload) {
          return coin;
        }
        return { ...coin, clicked: !coin.clicked };
      });
    default:
      return state;
  }
};

export default showCoins;
