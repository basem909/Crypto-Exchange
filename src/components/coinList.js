import { useDispatch, useSelector } from "react-redux";
import Coin from "./coin";
import "./coinList.css";
import logo from "./assets/B.jpeg";
import { useEffect, useState } from "react";
import { showCoinList } from "../redux/action-creators";

const CoinsExihbit = ({ clickHandler, changeHandler }) => {
  const coins = useSelector((state) => state.showCoins);
  const filteredCoins = coins.filter((coin) => coin.searched);
  console.log(filteredCoins);
  return (
    <div>
      <header className="header">
        <h1 className="title">Crypto World</h1>
      </header>
      <img src={logo} alt="crypto" className="background" />
      <span className="search-bar">
        <label name="search">Search coins by name</label>
        <input
          type="text"
          name="search"
          id="serchBar"
          placeholder="Search by Coin name here"
          onChange={(e) => {
            if (e.target.value) {
              const newStr = e.target.value.toLowerCase() || "";
              changeHandler(newStr);
            }
          }}
        />
      </span>
      <div className="coins-container">
        {filteredCoins &&
          filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.price}
              rank={coin.rank}
              cap={coin.cap}
              clickHandler={clickHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default CoinsExihbit;
