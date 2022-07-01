import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import showCoins from './reducer';
import { showCoinList } from './action-creators';

const allReducers = combineReducers({
  showCoins,
});
const store = legacyCreateStore(allReducers, applyMiddleware(logger, thunk));
store.dispatch(showCoinList());

export default store;
