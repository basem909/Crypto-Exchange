import { Routes, Route } from "react-router-dom";
import "./App.css";
import CoinsExihbit from './components/coinList'

const App = () => {
  return (
    <div className="App">
      <h1>Coin Nerd</h1>
      <CoinsExihbit />
    </div>
  );
};

export default App;
