import React, { useState } from 'react';
import './SearchBar.css'; // Custom styles for the search bar
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

// Define the type for the ticker data
interface TickerData {
  company: string;
  price: string;
  percentChange: string;
  isStockUp: boolean;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [tickerData, setTickerData] = useState<TickerData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  // Handle the input change (typing)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Update the query state with the input
  };

  // Handle the Enter key press event
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        setError(null); // Clear any previous errors
        setTickerData(null); // Clear previous data

        const options = {
          method: 'GET',
          url: `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote`,
          params: { ticker: query, type: 'STOCKS' },
          headers: {
            'X-RapidAPI-Key': 'd81b598224msh86d70e286ddc84ep10a189jsn600506e8263c',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        const data = response.data.body;

        // Extract relevant data from the response
        const tickerData: TickerData = {
          company: data.companyName,
          price: data.primaryData.lastSalePrice,
          percentChange: data.primaryData.percentageChange,
          isStockUp: data.primaryData.deltaIndicator.toLowerCase() === 'up',
        };
        
        setTickerData(tickerData);


        // After fetching the data, navigate to the TradePage with the stock data
        navigate('/trade', { state: {
          ticker: query,
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
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Input a stock ticker..."
          className="search-input"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {tickerData && (
        <div className="ticker-info">
          <p>Company: {tickerData.company}</p>
          <p>Price: {tickerData.price}</p>
          <p>Change: {tickerData.percentChange}</p>
          <p>Stock Up: {tickerData.isStockUp ? true : false}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
