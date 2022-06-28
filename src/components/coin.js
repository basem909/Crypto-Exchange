const Coin = ({ id, name, image, symbol, rank, price }) => (
  <div className="coin-container">
    <h2>{name}</h2>
    <img src={image} alt="coin" />
    <h4>{symbol}</h4>
    <p>{price}</p>
    <p>No.{rank}</p>
  </div>
);

export default Coin;
