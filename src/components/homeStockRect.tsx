import React, { useState } from 'react';
import './homeStockRect.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface TickerData {
  ticker: string;
  company: string;
  price: string;
  percentChange: string;
  isStockUp: boolean;
}

const HomeStockRect: React.FC<TickerData> = ({ ticker, price, isStockUp }) => {
  const [tickerData, setTickerData] = useState<TickerData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  // Define the onClick handler directly inside the component, marked as async
  const handleClick = async () => {
    try {
      setError(null); // Clear any previous errors
      setTickerData(null); // Clear previous data

      const options = {
        method: 'GET',
        url: `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote`,
        params: { ticker: ticker, type: 'STOCKS' },
        headers: {
          'X-RapidAPI-Key': 'd81b598224msh86d70e286ddc84ep10a189jsn600506e8263c',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      const data = response.data.body;

      // Extract relevant data from the response
      const tickerData: TickerData = {
        ticker: ticker,
        company: data.companyName,
        price: data.primaryData.lastSalePrice,
        percentChange: data.primaryData.percentageChange,
        isStockUp: data.primaryData.deltaIndicator.toLowerCase() === 'up',
      };
      
      setTickerData(tickerData);

      // After fetching the data, navigate to the TradePage with the stock data
      navigate('/trade', { state: {
        ticker: ticker,
        companyName: tickerData.company,
        price: tickerData.price,
        percentChange: tickerData.percentChange,
        isStockUp: tickerData.isStockUp,
        balance: 1000, // Hardcoded balance
       }
      });
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError('Unable to fetch stock data. Please try again later.');
    }
  };

  return (
    <div className={isStockUp ? 'stock-rect-up' : 'stock-rect-down'} onClick={handleClick}>
      <h1>{ticker}</h1>
      <p>${price}</p>
    </div>
  );
};

export default HomeStockRect;
