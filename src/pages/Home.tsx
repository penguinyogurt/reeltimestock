import React from 'react';
import './home.css';
import PortfolioPieChart from '../components/PortfolioPieChart.tsx';
import HomeStockRect from '../components/homeStockRect.tsx';
import SearchBar from '../components/SearchBar.tsx';

export default function Home() {
  // Get the current date and format it as Month Day (e.g., "January 25")
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // Mock CSV data
  const stockData = [
    { ticker: 'AAPL', price: 145.60, isStockUp: true },
    { ticker: 'GOOGL', price: 2765.12, isStockUp: true },
    { ticker: 'AMZN', price: 3450.05, isStockUp: false },
    { ticker: 'TSLA', price: 775.60, isStockUp: false },
    { ticker: 'MSFT', price: 298.50, isStockUp: true },
  ];

  const sampleData = [
    { name: 'Stocks', value: 400 },
    { name: 'Bonds', value: 300 },
    { name: 'Real Estate', value: 250 },
    { name: 'Cash', value: 100 },
    { name: 'Cryptocurrency', value: 200 },
    { name: 'Commodities', value: 50 },
    { name: 'Others', value: 75 },
  ];

  return (
    <div className="home-container">
      <h1 className="title">Stocks</h1>
      <p className="date">{formattedDate}</p>

      <SearchBar />

      <PortfolioPieChart data={sampleData} />

      <div className="stock-rects-container">
        {stockData.map((stock, index) => (
          <HomeStockRect
            key={index}
            ticker={stock.ticker}
            price={stock.price}
            isStockUp={stock.isStockUp}
          />
        ))}
      </div>
    </div>
  );
}
