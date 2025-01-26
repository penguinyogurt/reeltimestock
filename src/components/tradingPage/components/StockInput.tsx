import React from 'react';
import './StockInput.css'; // Ensure the styles are applied

interface StockInputProps {
  stockPrice: string; // Stock price passed as a prop
  setShares: React.Dispatch<React.SetStateAction<string>>; // Function to update shares in parent component
}

const StockInput: React.FC<StockInputProps> = ({ stockPrice, setShares }) => {
  
  // Handle changes to the shares input
  const handleSharesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input (no letters or special characters)
    setShares(value); // Update the shares state in parent component
  };

  // Prevent non-numeric characters from being typed
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode || event.keyCode;

    // Allow backspace (key code 8), delete (key code 46), and numbers (key codes 48-57)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Block any other character input
    }
  };

  return (
    <div className="stock-input-card">
      {/* Shares Input Row */}
      <div className="shares-container">
        <label htmlFor="shares">Shares:</label>
        <input
          id="shares"
          type="text" // Use type="text" to control input validation manually
          onChange={handleSharesChange}
          onKeyPress={handleKeyPress} // Block non-numeric characters
          placeholder="Enter shares"
        />
      </div>

      {/* Stock Price Row */}
      <div className="price-container">
        <span>Stock Prices:</span>
        <span>{stockPrice}</span>
      </div>
    </div>
  );
};

export default StockInput;