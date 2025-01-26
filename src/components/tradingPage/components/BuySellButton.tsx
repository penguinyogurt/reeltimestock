import React, { useState } from 'react';
import './BuySellButton.css'; // Make sure you link your CSS file for styling

const BuySellButton: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'buy' | 'sell'>('buy'); // Track which button is active

  // Handle Buy/Sell button click
  const handleButtonClick = (button: 'buy' | 'sell') => {
    setActiveButton(button); // Set the active button to Buy or Sell
  };

  return (
    <div className="buy-sell-button-container">
      {/* Buy Button */}
      <button
        className={`action-btn ${activeButton === 'buy' ? 'active-buy' : ''}`}
        onClick={() => handleButtonClick('buy')}
      >
        BUY
      </button>

      {/* Sell Button */}
      <button
        className={`action-btn ${activeButton === 'sell' ? 'active-sell' : ''}`}
        onClick={() => handleButtonClick('sell')}
      >
        SELL
      </button>
    </div>
  );
};

export default BuySellButton;