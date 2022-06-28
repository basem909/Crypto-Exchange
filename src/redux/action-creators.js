import coins from "../components/API";
import { coinsShowed } from './action-types';

export const showRockets = () => async (dispatch) => {
  const coinList = await coins();
  dispatch({ type: coinsShowed, payload: coinList });
};
