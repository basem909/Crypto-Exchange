import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CoinDetails from './components/coinDetails';
import CoinsExihbit from './components/coinList';
import { showDetails } from './redux/action-creators';

const App = () => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(showDetails(id));
  };
  return (
    <div className="App">
      <h1>Coin Nerd</h1>
      <Routes>
        <Route path="/" element={<CoinsExihbit clickHandler={clickHandler} />} />
        <Route path="/coinDetails" element={<CoinDetails clickHandler={clickHandler} />} />
      </Routes>
    </div>
  );
};

export default App;
