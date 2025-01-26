import React from 'react';
import { useNavigate } from 'react-router-dom';
import './polishedStockTrade.css';

interface PolishedStockTradeProps {
  ticker: string;
  companyName: string;
  price: string;
  percentChange: string; // The numerical value for percent change
  isStockUp: boolean;    // Determines whether the percentage change is positive (green) or negative (red)
}

const PolishedStockTrade: React.FC<PolishedStockTradeProps> = ({
  ticker,
  companyName,
  price,
  percentChange,
  isStockUp
}) => {
  const navigate = useNavigate();

  // Function to handle the closing (routing to "/")
  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className={`stock-card ${isStockUp ? 'stock-card-up' : 'stock-card-down'}`}>
      {/* Close Button */}
      <button className="close-btn" onClick={handleClose}>
        X
      </button>

      {/* Stock Ticker and Company Name */}
      <div className='company-info'>
        <h2 className="stock-ticker">{ticker}</h2>
        <p className="company-name">{companyName}</p>
      </div>

      {/* Price and Percentage Change */}
      <div className='price'>
        <div className="price-content">
          {/* Stock Price */}
          <p className="stock-price">{price}</p>
          {/* Percentage Change */}
          <p className={`percent-change ${isStockUp ? 'percent-up' : 'percent-down'}`}>
            {percentChange}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolishedStockTrade;
