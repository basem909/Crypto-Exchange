import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './coinDetails.css';

const CoinDetails = ({ clickHandler }) => {
  const coins = useSelector((state) => state.showCoins).filter(
    (coin) => coin.clicked,
  );
  return (
    <div>
      <header>
        <Link
          to="/"
           id={coins[0].id}
          onClick={(e) => clickHandler(e.target.id)}
        >
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
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </svg>
          {' '}
          Back
        </Link>
      </header>
      <div>
        <article className="coin-title">
          <img src={coins[0].image} alt="coin" className="coin-image" />
          <span>
            <h2 className="coin-name">{coins[0].name}</h2>
            <h3 className="coin-symbol">
              {coins[0].price}
              {' '}
              $
            </h3>
            <h4 className="coin-symbol">{coins[0].symbol}</h4>
            <p className="coin-rank">
              Rank:
              {coins[0].rank}
            </p>
          </span>
        </article>
        <article className="cap-info">
          <h2>
            {coins[0].name}
            {' '}
            Stats:
          </h2>
          <section className="stats">
            <h3>
              Fully diluted vol:
              {coins[0].fully_diluted_valuation || 'Uknown'}
              $
            </h3>
            <h3>
              Full vol:
              {coins[0].total_volume}
              $
            </h3>
            <h3>
              Highest value in 24H:
              {coins[0].high_24h}
              $
            </h3>
            <h3>
              Lowest value in 24H:
              {coins[0].low_24h}
              $
            </h3>
            <h3>
              Price change in 24H:
              {coins[0].price_change_24h}
              $
            </h3>
            <h3>
              Price change percent in 24H:
              {' '}
              {coins[0].price_change_percentage_24h}
              %
            </h3>
            <h3>
              market cap change in 24H:
              {coins[0].market_cap_change_24h}
              $
            </h3>
            <h3>
              market cap change percent in 24H:
              {' '}
              {coins[0].market_cap_change_percentage_24h}
              %
            </h3>
            <h3>
              circulating supply:
              {' '}
              {coins[0].circulating_supply || 'Unknown'}
              {' '}
              {coins[0].symbol}
            </h3>
            <h3>
              Total supply:
              {' '}
              {coins[0].total_supply || 'Unknown'}
              {' '}
              {coins[0].symbol}
            </h3>
            <h3>
              max supply:
              {' '}
              {coins[0].max_supply || 'Unknown'}
              {' '}
              {coins[0].symbol}
            </h3>
            <h3>
              All-time high:
              {coins[0].ath}
              $
            </h3>
            <h3>
              Percentage down off ATH:
              {coins[0].ath_change_percentage}
              %
            </h3>
            <h3>
              All-time low:
              {coins[0].atl}
              $
            </h3>
            <h3>
              Percentage up from ATL:
              {coins[0].atl_change_percentage}
              %
            </h3>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CoinDetails;
