const cryptoList = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const coins = async () => {
  const list = await fetch(cryptoList, { method: 'GET' });
  const coinsInfo = await list.json();
  const coins = coinsInfo.map((coin) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    image: coin.image,
    price: coin.current_price,
    rank: coin.market_cap_rank,
    cap: coin.market_cap,
    clicked: false,
  }));
  return coins;
};

export default coins;
