import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './coinDetails.css'

const CoinDetails = ({clickHandler}) => {
  const coins = useSelector((state) => state.showCoins).filter(
    (coin) => coin.clicked
  );
  return (
    <div>
      <header>
        <Link to="/" id={coins[0].id} onClick={(e) => clickHandler(e.target.id)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 512"
            className="sc-dkzDqf eFCovg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
          </svg>{" "}
          Back
        </Link>
      </header>
      <div>
        <article className="coin-title">
          <img src={coins[0].image} alt="coin" className="coin-image" />
          <span>
            <h2 className="coin-name">{coins[0].name}</h2>
            <h4 className="coin-symbol">{coins[0].symbol}</h4>
            <p className="coin-rank">Rank: {coins[0].rank}</p>
          </span>
        </article>
      </div>
    </div>
  );
};

export default CoinDetails;
