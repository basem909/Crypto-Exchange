import coins from "../components/API";
import { coinSearched, coinsShowed, detailsShowed } from "./action-types";

export const showCoinList = () => async (dispatch) => {
  const coinList = await coins();
  dispatch({ type: coinsShowed, payload: coinList });
};

export const showDetails = (id) => ({
  type: detailsShowed,
  payload: id,
});

export const searchCoinlist = (str) => ({ type: coinSearched, payload: str, });
