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
    fully_diluted_valuation: coin.fully_diluted_valuation,
    total_volume: coin.total_volume,
    high_24h: coin.high_24h,
    low_24h: coin.low_24h,
    price_change_24h: coin.price_change_24h,
    price_change_percentage_24h: coin.price_change_percentage_24h,
    market_cap_change_24h: coin.market_cap_change_24h,
    market_cap_change_percentage_24h: coin.market_cap_change_percentage_24h,
    circulating_supply: coin.circulating_supply,
    total_supply: coin.total_supply,
    max_supply: coin.max_supply,
    ath: coin.ath,
    ath_change_percentage: coin.ath_change_percentage,
    atl: coin.atl,
    atl_change_percentage: coin.atl_change_percentage,
  }));
  return coins;
};

export default coins;
