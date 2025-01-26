import React from 'react'
import './marketPlaceStockRect.css'

interface StockRectProps {
    ticker: string;
    company: string;
    price: number;
    percent: number;
    isStockUp: boolean; 
}

const MarketPlaceStockRect: React.FC<StockRectProps> = ({ ticker, company, price, percent, isStockUp }) => {
  return (
    <div className='stock-rect'>
      <div className='company-info'>
        <h1>{ticker}</h1>
        <h2>{company}</h2>
      </div>
      <div className='price'>
        <p>${price}</p>
        <p className={isStockUp ? 'price-up' : 'price-down'}> {percent}%</p>
      </div>
    </div>
  );
};

export default MarketPlaceStockRect;