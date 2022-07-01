import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CoinDetails from './components/coinDetails';
import CoinsExihbit from './components/coinList';
import {
  searchCoinlist,
  showDetails,
} from './redux/action-creators';

const App = () => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(showDetails(id));
  };
  const changehandler = (str) => {
    dispatch(searchCoinlist(str));
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <CoinsExihbit
              clickHandler={clickHandler}
              changeHandler={changehandler}
            />
          )}
        />
        <Route
          path="/coinDetails"
          element={<CoinDetails clickHandler={clickHandler} />}
        />
      </Routes>
    </div>
  );
};

export default App;
