import React from "react";
import "./stockValuation.css";
import BuySellButton from "./BuySellButton.tsx";

interface StockValuationProps {
  price: string; // Price of the stock
  shares: number; // Number of shares
}

const StockValuation: React.FC<StockValuationProps> = ({ price, shares }) => {
  const total = (parseInt(price.replace('$', '')) * shares).toFixed(2); // Calculate total

  return (
    <div className="valuation-container">
      <div className="calculation-section">
        <div className="calculation-display">
          <div className="line-item">
            <span>Price:</span>
            <span>{price}</span>
          </div>
          <div className="line-item">
            <span>x</span>
            <span>{shares}</span>
          </div>
          <hr className="divider" />
          <div className="line-item">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      {/* BuySellButton will now be stacked below the calculation section */}
      <div className="button-container">
        <BuySellButton />
      </div>
    </div>
  );
};

export default StockValuation;
