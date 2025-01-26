import React from 'react';
import './Balance.css';

interface BalanceDisplayProps {
  balance: number; // User's balance
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className="balance-card">
      <p className="balance-text">Balance: ${balance} CAD</p>
    </div>
  );
};

export default BalanceDisplay;