import { coinsShowed } from './action-types';

const showCoins = function reducer(state = [], action = {}) {
  switch (action.type) {
    case coinsShowed:
      return [...state, ...action.payload];
    // case rocketBookingHandler:
    //   return state.map((rocket) => {
    //     if (rocket.id !== action.payload) {
    //       return rocket;
    //     }
    //     return { ...rocket, reserved: !rocket.reserved };
    //   });
    default:
      return state;
  }
};

export default showCoins;
