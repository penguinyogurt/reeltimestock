import React, { useState } from 'react';
import './stockTrade.css';

interface StockTradeProps {
  ticker: string;
  price: number;
  isStockUp: boolean;
}

const StockTrade: React.FC<StockTradeProps> = ({ ticker, price, isStockUp }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className={`stock-card ${isStockUp ? 'stock-card-up' : 'stock-card-down'}`}>
      <h2 className="ticker">{ticker}</h2>
      <p className="price">${price}</p>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={decrement}>−</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-btn" onClick={increment}>+</button>
      </div>
      <div className="action-buttons">
        <button className="buy-btn">Buy</button>
        <button className="sell-btn">Sell</button>
      </div>
    </div>
  );
};

export default StockTrade;