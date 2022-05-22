import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin'

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  document.title = "CryptoApp"

  useEffect(() => {
    let interval = setInterval(() => {
        axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        .then(res => {
          setCoins(res.data);
          console.log(res.data)
          console.log("Data Fetched")
        })
        .catch(error => console.log(error));
    },1000);

    return () => {
      clearInterval(interval);
    };

  })

  useEffect(() => {

  })
  
  
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className='coin-text'>Search Any Currency</h1>
        <form>
          <input 
            className = "coin-input"
            type="text" 
            onChange={handleChange}
            placeholder='Search' 
          />
        </form>
      </div>

      <div class="container" id = "coincontainer">
        <div class="row">
          <div class="col-sm-3 col-2"id ="coin">
            Coin
          </div>
          <div class="col-sm-2 col-2" id ="price">
            Price
          </div>
          <div class="col-sm-2 col-2" id ="volume">
            Volume
          </div>
          <div class="col-sm-2 col-2" id ="pricechange">
            Price Change% (24h)
          </div>
          <div class="col-sm col-2" id ="market">
            Market Cap
          </div>
        </div>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name = {coin.name}
            price = {coin.current_price}
            symbol = {coin.symbol}
            marketcap = {coin.total_volume}
            volume = {coin.market_cap}
            image = {coin.image}
            priceChange = {coin.price_change_percentage_24h}         
            
          />
        );
      })}      
    </div>
  );
}

export default App;

