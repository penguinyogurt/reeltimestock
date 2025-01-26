import React, { useState } from 'react'; // Import React here
import { useLocation } from 'react-router-dom';
import PolishedStockTrade from '../components/tradingPage/components/PolishedStockTrade.tsx';
import BalanceDisplay from '../components/tradingPage/components/Balance.tsx';
import StockInput from '../components/tradingPage/components/StockInput.tsx';
import StockValuation from '../components/tradingPage/components/StockValuation.tsx';

import './tradePage.css'; // Make sure this is properly imported

// Define the type for the expected location state
interface TickerData {
  ticker: string;
  companyName: string;
  price: string;
  percentChange: string;
  isStockUp: boolean;
  balance: number;
}

const TradePage: React.FC = () => {
  const { state } = useLocation();
  
  // Always call useState before returning from the component
  const [shares, setShares] = useState<string>('');

  console.log(state);
  const { ticker, companyName, price, percentChange, isStockUp, balance } = state;

  return (
    <div className="trade-page-container"> {/* Add this class here */}
      <PolishedStockTrade
        ticker={ticker}
        companyName={companyName}
        price={price}
        percentChange={percentChange}
        isStockUp={isStockUp}
      />
      <BalanceDisplay balance={balance} />
      <StockInput stockPrice={price} setShares={setShares} />
      <StockValuation price={price} shares={parseInt(shares) || 0} />
    </div>
  );
};

export default TradePage;
