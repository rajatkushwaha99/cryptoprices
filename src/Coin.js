import React from 'react';
import bootstrap from 'bootstrap';
import './App.css';

const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div className="coin-container container" id='coincontainer'>
            <div className="coin-row row">
                <div className="coin col-4 row">
                    <img src={image} alt="Crypto" className="col-2" id = "coin-image" />
                    <h1 className="col-8 coin-name">{name}</h1>
                    {/* <p className="coin-symbol col-2">{symbol}</p> */}
                </div>

                <div className="coin-data col-8 row">
                    <p className="coin-price coindata col-2 ">${price}</p>
                    <p className="coin-volume coindata col-2 ">${volume.toLocaleString()}</p>

                    {priceChange < 0?(
                        <p className="coin-percent-red coindata col-2 ">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent-green coindata col-2 ">{priceChange.toFixed(2)}%</p>
                    )}

                    <p className="coin-marketcap coindata col-2 ">
                        ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;